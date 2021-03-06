
/**
* App 启动类
* @class
* @name App
*/
define('App', function (require, module, exports) {
    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Mapper = MiniQuery.require('Mapper');
    var Config = require('Config');


    var mapper = new Mapper();


    /**
    * 构造器。
    * @constructor
    */
    function App(name, config) {

        Mapper.setGuid(this);

        config = Config.clone(module.id, config);

        var meta = {
            'name': name,
            'mask': config.mask,
            //'predefined': [],
            'animation': config.animation,
        };

        mapper.set(this, meta);


    }



    App.prototype = /**@lends App#*/ {
        constructor: App,

        /**
        * 初始化执行环境，并启动应用程序。
        * 该方法会预先定义一些公共模块，然后定义一个指定的(或匿名)模块并启动它。
        * @param {function} factory 工厂函数，即启动函数。
        */
        launch: function (factory) {

            var $ = require('jquery-plugin/touch') || require('$'); //
            var MiniQuery = require('MiniQuery');
            var KISP = require('KISP');
            var Module = require('Module');

            var define = Module.define;

            define('$', function () {
                return $;
            });

            define('MiniQuery', function () {
                return MiniQuery;
            });

            define('KISP', function () {
                return KISP;
            });

            var meta = mapper.get(this);
            var name = meta.name;

            define(name, factory);
            Module.require(name); //启动
        },
       
        /**
        * 初始化执行环境，创建导航管理器和相应的 UI 组件，并启动应用程序。
        * @param {function} factory 工厂函数，即启动函数。
        */
        render: function (fn) {
            var meta = mapper.get(this);
            var Nav = module.require('Nav');
            

            //不使用动画
            if (!meta.animation) { 
                this.launch(function (require, module) {
                    var nav = Nav.create(meta.mask);

                    //后退时触发
                    nav.on('back', function (current, target) {
                        document.activeElement.blur(); // 关闭输入法
                        current = module.require(current);
                        target = module.require(target);
                        current.hide();
                        target.show();
                    });

                    //跳转到目标视图之前触发，先隐藏当前视图
                    nav.on('before-to', function (current, target) {
                        current = module.require(current);
                        current.hide();
                    });

                    //统一绑定视图跳转动作，在调用 nav.to(...) 时会给触发
                    nav.on('to', function (name, arg0, arg1, argN) {
                        var args = [].slice.call(arguments, 1);
                        var M = module.require(name);
                        M.render.apply(M, args);
                    });

                    fn && fn(require, module, nav);
                });

                return;
            }



            //使用动画
            var Mask = require('Mask');
            var Transition = module.require('Transition');

            this.launch(function (require, module) {

                var name$bound = {}; //记录目标视图是否已绑定了 transitionend 事件。
                var eventName = Transition.getEventName();
                var nav = Nav.create();

                var mask = new Mask();
                mask.render();


                //后退时触发
                nav.on('back', function (current, target) {
                    document.activeElement.blur(); // 关闭输入法

                    target = module.require(target);
                    target.show(); //这里要触发 show 事件

                    current = module.require(current);
                    current.$.removeClass('Forward').addClass('Back');

                    target.$.css({ 'z-index': 1, });
                    current.$.css({ 'z-index': 3, });

                    mask.$.removeClass('BeforeForward Forward Back');
                    mask.$.addClass('BeforeBack');
                    mask.$.show();


                    //防止时间竞争
                    setTimeout(function () {
                        mask.$.addClass('Back');
                    }, 50);

                });


                //跳转到目标视图之前触发
                nav.on('before-to', function (current, target) {
                    var name = target;

                    current = module.require(current);
                    target = module.require(target);

                    current.$.css({ 'z-index': 1, });
                    target.$.css({ 'z-index': 3, });


                    
                    target.$.addClass('BeforeForward');
                    target.$.removeClass('Back');
                    target.$.show();

                    mask.$.removeClass('Back BeforeBack Forward')
                    mask.$.addClass('BeforeForward');
                    mask.$.show();

                    //防止时间竞争
                    setTimeout(function () {
                        mask.$.addClass('Forward');
                        target.$.addClass('Forward');
                    }, 50);

                    // css 动画结束后执行
                    var bound = name$bound[name];
                    if (!bound) { //首次绑定

                        target.$.on(eventName, function () {
                            if (target.$.hasClass('Forward')) { //前进
                                current.hide(); //要触发 hide 事件
                            }
                            else if (target.$.hasClass('Back')) { //后退
                                target.hide(); //要触发 hide 事件
                            }
                            mask.$.hide();
                        });

                        name$bound[name] = true;
                    }
                });


                //统一绑定视图跳转动作，在调用 nav.to(...) 时会给触发
                nav.on('to', function (name, arg0, arg1, argN) {
                    var args = [].slice.call(arguments, 1);
                    var target = module.require(name);
                    target.render.apply(target, args);
                });

                fn && fn(require, module, nav);

            });

        },

     

    };


    return App;

});


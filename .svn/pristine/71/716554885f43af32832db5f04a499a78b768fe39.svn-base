
/**
* 遮罩层
* @class
* @name Mask
*/
define('Mask', function (require, module, exports) {
    var $ = require('$');
    var MiniQuery = require('MiniQuery');

    var Mapper = MiniQuery.require('Mapper');
    var Emitter = MiniQuery.require('Emitter');

    var Config = require('Config');

    var mapper = new Mapper();



    function get(meta) {
        var div = meta.div;
        if (div) {
            return div;
        }

        var id = meta.id;
        var sample = meta.sample;
        var html = $.String.format(sample, {
            'id': id,
        });

        $(document.body).append(html);
        div = meta.div = document.getElementById(id);
        return div;
    }

    /**
    * 构造器。
    * @constructor
    */
    function Mask(config) {

        Mapper.setGuid(this);

        config = Config.clone(module.id, config);

        var id = config.prefix + $.String.random(config.suffix).toLowerCase();
        var emitter = new Emitter(this);

        var meta = {
            'id': id,
            'div': null,
            'sample': config.sample,
            'volatile': config.volatile,
            'emitter': emitter,
            'hasBind': false, //是否已绑定事件

            'style': $.Object.filter(config, [
                'opacity',
                'top',
                'bottom',
                'background',
                'z-index',
            ]),
        };

        mapper.set(this, meta);

    }


    Mask.prototype = /**@lends Mask#*/ {
        constructor: Mask,

        /**
        * 显示遮罩层。
        */
        show: function (duration) {
            var meta = mapper.get(this);
            var volatile = meta.volatile;
            var self = this;
            var div = get(meta);

            if (!meta.hasBind) {
                meta.hasBind = true;

                if (volatile) { //指定了易消失，即点击 mask 层就隐藏

                    $(div).on('click', function () {

                        if (volatile === true || volatile == 'hide') {
                            self.hide();
                            return;
                        }

                        if (volatile == 'remove') {
                            self.remove();
                        }

                        throw new Error('配置字段 volatile 的取值只能为 true|false|"hide"|"remove"');
                    });
                }
            }

            $(div).css(meta.style).show();
            meta.emitter.fire('show');

            if (duration) {
                setTimeout(function () {
                    self.hide();
                }, duration);
            }

        },

        /**
        * 隐藏遮罩层。
        */
        hide: function () {
            var meta = mapper.get(this);
            var div = meta.div;

            if (!div) {
                return;
            }

            $(div).hide();
            meta.emitter.fire('hide');

        },

        /**
        * 移除遮罩层。
        */
        remove: function () {

            var meta = mapper.get(this);
            var div = meta.div;

            if (!div) {
                return;
            }

            //reset
            meta.div = null;
            meta.hasBind = false;

            document.body.removeChild(div);
            meta.emitter.fire('remove');

        },

        /**
        * 绑定事件。
        */
        on: function (name, fn) {
            var meta = mapper.get(this);
            var emitter = meta.emitter;

            var args = [].slice.call(arguments, 0);
            emitter.on.apply(emitter, args);
        },

    };

    return Mask;

});


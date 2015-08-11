
/**
* Web 站点构建器。
*/
module.exports = (function () {

    'use strict';

    var grunt = require('grunt');
    var Path = require('path');

    var $ = require('./MiniQuery');
    var Grunter = require('./Grunter');
    var Pather = Grunter.require('Path'); //这里为 'Path'，而不是 'Pather'
    var Tasks = Grunter.require('Tasks');


    var JsScripts = require('./JsScripts');
    var CssLinks = require('./CssLinks');

    var Mapper = $.require('Mapper');


    var beginJs = 'partial/begin.js';
    var endJs = 'partial/end.js';

    var banner = grunt.file.read('partial/banner.js');


    var mapper = new Mapper();

    var pkg = grunt.file.readJSON('package.json');

    /**
    * 生成 banner 信息头
    */
    function getBanner(list) {

        var total = list.length;

        return $.String.format(banner, {
            'name': pkg.name,
            'description': pkg.description,
            'version': pkg.version,
            'datetime': $.Date.format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            'count': total - 2,
            'total': total,
            'list': $.Array.keep(list, function (item, index) {
                return '*    ' + getRelaivePath(item);
            }).join('\n')
        });
    }

    /**
    * 获取相对于 ../htodcs/ 的路径表示。
    */
    function getRelaivePath(path) {
        return Path.relative(pkg.dir.htdocs, path).replace(/\\/ig, '/');
    }



    /**
    * 针对单个页面的构建工具。
    */
    function Builder(src, dest, level) {

        Mapper.setGuid(this);

        src = Pather.format(src);   //替换模板字符串得到真实的路径
        dest = Pather.format(dest); //替换模板字符串得到真实的路径

        var meta = {
            level: level,
            src: Pather.parse(src),
            dest: Pather.parse(dest),

        };

        mapper.set(this, meta);

    }

    //实例方法
    Builder.prototype = /**@lends Builder#*/ {
        constructor: Builder,

        /**
        * 从 html 文件中解析出引用的 js 文件，合并文件。
        */
        concat: function () {
            var meta = mapper.get(this);

            var list = JsScripts.read(meta.src.fullname); //从 html 文件中分析出 js 引用
            if (list.length == 0) { //没有需要合并的文件
                return;
            }


            var ext = '.all.debug.js';
            var dest = meta.dest.name + ext;

            //增加元数据
            meta.concat = {
                'dest': dest,
                'filename': meta.dest.basename + ext,
            };

            list = Pather.linearize({
                dir: meta.src.dir,
                files: list
            });
            list = $.Array.merge(beginJs, list, endJs);

            var config = {
                src: list,
                dest: dest,
                options: {
                    banner: getBanner(list),
                    process: function (content, path) {
                        path = getRelaivePath(path);
                        return '\n// ' + path + '\n' + content;
                    }
                }
            };

            //输出文件 x.all.debug.js
            var target = $.String.random();
            Tasks.run('concat', target, config);
        },

        
        /**
        * 精简 js 文件。
        */
        uglify: function () {
            var meta = mapper.get(this);

            if (!meta.concat) { //上一步没有进行合并
                return;
            }
            
            var ext = '.all.min.js';
            var dest = meta.dest.name + ext;

            meta.uglify = {
                'dest': dest,
                'filename': meta.dest.basename + ext,
            };

            var config = {
                src: meta.concat.dest,
                dest: dest,
                options: {
                    sourceMap: meta.level <= 2, //即 level >= 3 时，不生成 .map 文件
                }
            };

            //输出文件 
            //  x.all.min.js
            //  x.all.min.js.map (如果有)
            var target = $.String.random();
            Tasks.run('uglify', target, config);

        },


        /**
        * 合并 css
        */
        concatCss: function (useMin) {

            var meta = mapper.get(this);
            console.dir(meta);

            var list = CssLinks.read(meta.src.fullname); //从 html 文件中分析出 css 引用
            if (list.length == 0) { //没有需要合并的文件
                return;
            }

            list = Pather.linearize({
                dir: meta.src.dir,
                files: list
            });

            if (useMin) {
                list = $.Array.keep(list, function (item, index) {
                    return item.replace('.debug.css', '.min.css');
                });
            }


            var ext = useMin ? '.all.min.css' : '.all.debug.css';
          
            var name = Path.relative('../htdocs/', meta.src.fullname);
            name = name.split('\\').join('.');

            var dest = '../build/' + meta.level + '/htdocs/style/css/' + name + ext;

            var filename = Path.relative(meta.dest.dir, dest);
            filename = filename.split('\\').join('/');


            //增加元数据
            meta.concatCss = {
                'list': list,
                'dest': dest,
                'filename': filename,
            };

            var config = {
                src: list,
                dest: dest,
            };

            //输出文件 x.all.debug.css
            var target = $.String.random();
            Tasks.run('concat', target, config);

        },

        


        /**
        * 精简 css 文件。
        */
        uglifyCss: function () {
            var meta = mapper.get(this);

            this.concatCss(true);

        },

        /**
        * 复制 html 页面，并对 css 和 js 的引用作版本和路径的修正。
        */
        copy: function () {

            var meta = mapper.get(this);

            var config = {
                src: meta.src.fullname,
                dest: meta.dest.fullname,
                options: {
                    process: function (html) {
                        var level = meta.level;

                        if (meta.concatCss) { //把 css 分文件替换成合并后的  css 文件引用
                            html = CssLinks.apply(html, meta.concatCss.filename);
                        }

                        if (level >= 2) { //把所有 css 文件引用的 debug 版换成 min 版

                            html = CssLinks.minify(html, '.debug.css', '.min.css');
                        }

                        if (meta.concat) { //把 js 分文件替换成合并后的  js 文件引用
                            html = JsScripts.apply(html, meta.concat.filename);
                        }

                        if (level >= 2) { //把所有 js 文件引用的 debug 版换成 min 版
                            html = JsScripts.minify(html, '.debug.js', '.min.js');
                        }

                        return html;
                    },
                }
            };

            Tasks.run('copy', $.String.random(), config);
        },

        /**
        * 精简 html 页面。
        */
        htmlmin: function () {

            var meta = mapper.get(this);

            var config = {
                src: meta.dest.fullname,
                dest: meta.dest.fullname,
                options: {
                    //具体说明见：https://github.com/kangax/html-minifier#options-quick-reference
                    collapseWhitespace: true,
                    removeEmptyAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    removeRedundantAttributes: true,
                    //removeAttributeQuotes: true, //引号不能去掉，否则可能会出错。
                    minifyJS: false,
                    minifyCSS: false,
                    minifyURLs: true,
                    keepClosingSlash: true,
                }
            };

            var target = $.String.random();
            Tasks.run('htmlmin', target, config);
        },

        /**
        * 清理文件。
        */
        clean: function () {
            var meta = mapper.get(this);

            if (!meta.concat) { //没有生成合并的文件
                return;
            }

            //删除 .debug.js 和 .debug.css 文件(其他的在别的地方删除了)
            var config = {
                src: [
                    meta.concat.dest,
                    meta.concatCss.dest.replace('.all.min.css', '.all.debug.css'),
                ],
                //src: meta.concat.dest,
                options: {
                    force: true //允许删除当前工作目录外的其他文件
                }
            };

            var target = $.String.random();
            Tasks.run('clean', target, config);
        },

        /**
        * 把 js 内嵌到 html 页面中。
        */
        embedJs: function () {
            var meta = mapper.get(this);

            var config = {
                src: meta.dest.fullname,
                dest: meta.dest.fullname,
                options: {
                    process: function (html) {

                        var js = grunt.file.read(meta.uglify.dest);

                        //提取出 script 标签
                        var reg = /<script[^>]*?>[\s\S]*?<\/script>/gi;
                        var tags = html.match(reg);

                        //找到含有 xx.all.min.js 的 script 标签
                        var item = $.Array.findItem(tags, function (item, index) {
                            return item.indexOf(meta.uglify.filename) > 0;
                        });

                        if (item) {
                            html = html.replace(item, '<script>' + js + '</script>');
                        }

                        return html;
                    },
                }
            };

            Tasks.run('copy', $.String.random(), config);


            //删除 xx.all.min.js
            var config = {
                src: meta.uglify.dest, 
                options: {
                    force: true //允许删除当前工作目录外的其他文件
                }
            };

            var target = $.String.random();
            Tasks.run('clean', target, config);

        },



        build: function () {
            var meta = mapper.get(this);
            var level = meta.level;

            this.concatCss();
            this.uglifyCss();
            

            this.concat();
            this.uglify();
            this.copy();

            

            if (level >= 3) {
                this.clean();
                
            }

            if (level >= 10) {
                this.embedJs();
            }

            if (level >= 13) {
                this.htmlmin();
            }


        }
    };



    //静态方法
    return $.Object.extend(Builder, /**@lends Builder*/ { 

        build: function (config) {

            var level = config.level;
            var src = config.src;
            var dest = config.dest;

            //先清空目标目录
            Tasks.run('clean', $.String.random(), {
                src: dest,
                options: {
                    force: true
                }
            });

            //复制
            Tasks.run('copy', $.String.random(), {
                dest: dest,
                src: $.Array.grep(config.copy || [], function (item) {
                    return !!item;
                }),
            });



            var obj = $.Object.extend({}, src, {
                dir: dest
            });

            var dests = Pather.linearize(obj);
            var list = Pather.linearize(src);

            list.forEach(function (src, index) {

                var builder = new Builder(src, dests[index], level);
                builder.build();

            });



        }

    });



})();


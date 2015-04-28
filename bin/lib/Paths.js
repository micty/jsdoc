


module.exports = (function ($) {

    function combine(dir, files, state) {

        if (dir.slice(-1) != '/') { //确保以 '/' 结束，统一约定，不易出错
            dir += '/';
        }

        var depth = 1;

        return $.Array.keep(files, function (item, index) {

            if (typeof item == 'string') {
                return dir + item;
            }

            depth++;

            if (state) {
                state.depth = depth;
            }

            return combine(dir + item.dir, item.files, state); //递归
        });
    }

    //获取一维的
    function linear(dir, files) {

        if (typeof dir == 'object') { //linear( { dir: '', files: [] } );
            files = dir.files;
            dir = dir.dir;
        }

        if (dir.slice(-1) != '/') { //确保以 '/' 结束，统一约定，不易出错
            dir += '/';
        }

        var state = {
            depth: 0
        };

        var a = combine(dir, files, state);
        var b = $.Array.reduceDimension(a, state.depth); //降维

        return b;
    }

    function pair(src, dest, files) {
        if (typeof src == 'object') { //pair( { src: '', dest: '', files: [] })
            files = src.files;
            dest = src.dest;
            src = src.src;
        }


        var srcs = linear(src, files);
        var dests = linear(dest, files);

        return $.Array.keep(srcs, function (src, index) {
            return {
                src: src,
                dest: dests[index]
            };
        });
    }



    return {
        combine: combine,
        linear: linear,
        pair: pair
    };

})(require('./MiniQuery.js'));


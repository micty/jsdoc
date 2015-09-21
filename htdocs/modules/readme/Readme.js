
define('/Readme', function (require, module, exports) {

    var $ = require('$');
    var MiniQuery = require('MiniQuery');
    var Markdown = require('Markdown');

    var Source = require(module, 'Source');
    var Title = require(module, 'Title');
    var Url = require(module, 'Url');

    var view = document.getElementById('div-view-readme');
    var content = document.getElementById('div-readme-content');
    var currentUrl = ''; //当前显示的 readme 的 url


   

    function render(url) {

        
        url = Url.resolve(url);
        var info = Url.getInfo(url);

        if (url == currentUrl) { //已经渲染过，直接显示出来即可
            show(info);
            return;
        }


        var md = new Markdown(url);

        md.on('render', function (readme) {

            currentUrl = url;

            $(view).removeClass('loading');

            if (!readme) {
                hide();
                return;
            }

            Url.queryStringToHash(content);
            
            show(info);

            Source.render(info);

        });

        md.render(content);

    }


    //提取 h1 - h6 的标题结构，未用到
    function tree() {

        var list = [];

        $(content).find('h1, h2, h3, h4, h5, h6').each(function (index) {

            var el = this;
            var level = el.nodeName.slice(1); //h2 --> 2
            level = Number(level);

            var text = $(el).text();

            list.push({
                'index': index,
                'level': level,
                'text': text,
            });

        });

        console.dir(list);
    }


    function show(info) {

        Title.set(content, info);

        if (info.isMarkdown) {
            $(document.body).removeClass('source').addClass('readme');

        }
        else {
            $(document.body).removeClass('readme').addClass('source');
        }


        //这里跟 MainPanel 有冲突，不能用 show()，
        //否则 jQuery 会计算出 display: -webkit-box 而导致样式混乱。
        //重现方法：页面一进来就先显示 MainPanel，再回到首页
        $(view).css('display', 'block'); 
    }

    function hide() {
        $(view).hide();
        $(document.body).removeClass('readme source');
    }


    return {
        render: render,
        show: show,
        hide: hide,
    };

});

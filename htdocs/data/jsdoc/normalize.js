


var FS = require('fs');


//执行 js 文件取得 json
var path = './classes.js';

var js = FS.readFileSync(path).toString();
js = js + '; return __classes__;';

var json = new Function(js)(); 

//过滤掉一些成员
json = JSON.stringify(json, function (key, value) {

    if (key.indexOf('_') == 0) {
        return;
    }

    if (key == 'comment' && typeof value == 'object') {
        return;
    }

    if (key == '$args' && typeof value == 'object') {
        return;
    }

    if (value === '' || value === false) {
        return;
    }

    return value;

}, 4);


FS.writeFileSync('./jsdoc.debug.json', json);


js = 'var __classes__ = ' + json + ';';
FS.writeFileSync('./jsdoc.debug.js', js);




json = JSON.parse(json);
json = JSON.stringify(json);
FS.writeFileSync('./jsdoc.min.json', json);


js = 'var __classes__=' + json + ';';
FS.writeFileSync('./jsdoc.min.js', js);
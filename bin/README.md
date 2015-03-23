
该目录是自动化构建目录，依赖于 NodeJs。

使用之前，请确保安装了 NodeJs 和 grunt-cli，

在此基础上，第一次使用时，请先在命令行切换到当前目录，
然后执行 npm install 命令以安装相应的插件，依赖的插件定义在 package.json 文件，
安装完插件后，会在当前目录生成一个 node_modules 目录，该目录比较大，请不要添加到 SVN 上。

然后执行 grunt 命令即可执行构建。
具体的构建规则见 Gruntfile.js 

>更多知识请参阅
    [NodeJs官网](http://www.nodejs.org/)
    [GruntJs官网](http://www.gruntjs.net/)
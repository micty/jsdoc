
@rem 该批处理文件由 Grunt 工具生成

set name=default
set version=2.4.0

set tmpl=plain-data

cd ..
set root=..\..
set build=%root%\build
set bin=%root%\bin

set home=%build%\%name%\%version%
set doc=%home%\doc
set src=%home%\src

cd %bin%/jsdoc_toolkit-2.4.0

java -jar jsrun.jar app\run.js -a -D="noGlobal:true" -t=templates\%tmpl% -d=%doc% ^
%src%/core/Module.js ^
%src%/core/$.js ^
%src%/core/MiniQuery.js ^
%src%/core/IScroll.js ^
%src%/core/KISP.js ^
%src%/compatible/jquery/animate.js ^
%src%/crypto/MD5.js ^
%src%/excore/Config.js ^
%src%/excore/Config/Url.js ^
%src%/excore/Edition.js ^
%src%/excore/File.js ^
%src%/excore/Fn.js ^
%src%/excore/JSON.js ^
%src%/excore/Mapper.js ^
%src%/excore/Module.js ^
%src%/excore/Seajs.js ^
%src%/excore/Url.js ^
%src%/api/API.js ^
%src%/api/API/Ajax.js ^
%src%/api/SSH.js ^
%src%/api/SSH/Ajax.js ^
%src%/api/SSH/Server.js ^
%src%/api/SSH/Server/Config.js ^
%src%/api/SSH.API.js ^
%src%/api/SSH.API/Ajax.js ^
%src%/api/Proxy.js ^
%src%/cloud-home/CloudHome.API.js ^
%src%/cloud-home/CloudHome.js ^
%src%/cloud-home/CloudHome.Native.js ^
%src%/ui/Mask.js ^
%src%/ui/Navigator.js ^
%src%/ui/Scroller/pull.js ^
%src%/ui/Scroller.js ^
%src%/ui/Template.js ^
%src%/jquery-plugin/touch.js ^
%src%/partial/default/expose.js


cd %home%


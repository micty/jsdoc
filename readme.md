﻿
JsDoc 文档展示平台
==============================================================
--------------------------------------------------------------

###简介 

JsDoc 文档展示平台，是一个用于展示 Markdown 格式文档和 JsDoc 抽取出来的文档的 Web 站点。
如果你对用 JsDoc-ToolKit 从 JS 文件中抽取注释成文档的过程不熟悉，没有关系，你可以只使用前半部分，
即你可以把它当成一个**用于展示 Markdown 格式文档的 Web 站点**。

###示例 [KISP框架](http://mob.cmcloud.cn/lib-cmd/kisp/htdocs/index.html)



###优势与特点
- **重点是在展示 Markdown 文档，而不是提供可视化编辑**。
你可以使用任何你熟悉的 Markdown 文档编辑器来写 md 文件。写好之后，你只需要把它放在 `/data` 目录，并对它进行引用以跳转到它即可。

- **支持 Markdown 文档内的跳转**。
比如你要在 A.md 内有个链接点击后跳转到 B.md，只要在 A.md 内写 `[查看详情](?file=B.md)` 的超链接即可。点击后会自动加载 B.md 并展示到页面上。

- **支持代码语法高亮**
目录前可以高亮的语言有 `js`、`css`、`html` 等。还会有行号显示。

- **支持 Url 可复制可分享**
当你的站点部署到服务器后，你可以把你看到的内容所对应的 Url 复制并分享给好友，你的好友打开后看到的内容跟你的完全一致。

- **单页应用，视图之间的跳转不会引起页面跳转**
本站点采用了单页形式，所有的视图之间的跳转都是在当前页面 `index.html`，并会通过 Url 中的 hash 进行视图的记录和跟踪。
避免页面之间的跳转，可以大大提高用户的体验。

- **纯前端，无后台，部署简单**
本平台采用了纯前端技术，无需要任何后台技术，如动态语言(php、jsp)和数据库等。
本平台会使用 ajax 技术动态加载 `/data` 目录下的 `.md` 类型的文件，并解析和展示到页面上。

- **支持直接解析和显示代码源文件**
可以直接链接到代码源文件中，如 `js`、`css`、`html` 等，本平台会加载并解析它们，然后用带有语法高亮的方式显示它们，让源代码更可读。

###使用方法
- 要使用平台，首先你需要一个 Web 服务器，然后把 /build/13/htdocs 目录拷到你的服务器上。
- 建立一个虚拟目录，然后指向 htdocs 目录。
- 给 `.md` 文件类型添加相应的 MEMI 类型：`text/plain`。
- 把在外部写好的 `.md` 文件拷到 `/data` 目录。
- 起始文件在 `/data/readme.md`，可以修改它，并在里面加链接以跳到其它 `.md` 文件。
-











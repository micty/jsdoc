﻿
JsDoc 文档展示平台
==============================================================
--------------------------------------------------------------

###简介 

JsDoc 文档展示平台，是一个用于展示 Markdown 格式文档和 JsDoc 抽取出来的文档的 Web 站点。
如果你对用 JsDoc-ToolKit 从 js 文件中抽取注释成文档的过程不熟悉，没有关系，你可以只使用前半部分，
即你可以把它当成一个**用于展示 Markdown 格式文档的 Web 站点**。

###示例 [KISP框架](http://mob.cmcloud.cn/lib-cmd/kisp/htdocs/index.html)



###优势与特点
- **重点是在展示 Markdown 文档，而不是提供可视化编辑**。
你可以使用任何你熟悉的 Markdown 文档编辑器来写 md 文件。写好之后，你只需要把它放在 `/data` 目录，并对它进行引用以跳转到它即可。

- **支持 Markdown 文档内的跳转**。
比如你要在 A.md 内有个链接点击后跳转到 B.md，只要在 A.md 内写 `[查看详情](?file=B.md)` 的超链接即可。点击后会自动加载 B.md 并展示到页面上。

- **支持多个 Markdown 文档合并显示**
有些文章比较长，平时我们会拆分成几个文档，这样方便编写与管理。 但显示的时候，我们可能需要全部显示成篇文章。
换言之：多个文档，合并显示。 如可以使用 `[查看详情](?file=A.md,B.md,C.md)` 的超链接，点击后会自动加载 `A.md`、`B.md`、`C.md`， 然后把它们的内容合并成一个整体展示到页面上。
而做这一切的合并，全发生在前端。 原理是前端一次性加载全部分文档，就绪后把它们的内容按顺序进行拼接(合并)，然后展示到页面上，就如同它们是一个文档一样。
**注意：分文件里如果有跳转到其它文件的链接，最好确保这些分文件在同一个目录，以避免相对路径不一致的问题**

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

- **支持显示大纲列表**
可以切换显示/隐藏大纲列表，这对于文章内容比较长时，快速查看大纲列表结构比较方便。



###使用方法
- 要使用平台，首先你需要一个 Web 服务器，然后把 /build/13/htdocs 目录拷到你的服务器上。
- 建立一个虚拟目录，然后指向 htdocs 目录。
- 给 `.md` 文件类型添加相应的 MEMI 类型：`text/plain`。
- 把在外部写好的 `.md` 文件拷到 `/data` 目录。
- 起始文件在 `/data/readme.md`，可以修改它，并在里面加链接以跳到其它 `.md` 文件。


###更新记录


2015-12-10
- 修正 Readme 模块里显示代码源文件时标题无法填充的问题。









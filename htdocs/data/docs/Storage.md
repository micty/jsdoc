#HTML5 Web 存储


HTML5 提供了两种在客户端存储数据的新方法：
- `localStorage`：没有时间限制的数据存储。
- `sessionStorage`：针对一个会话的数据存储。
之前，这些都是由 `cookie` 完成的。 但是 `cookie` 不适合大量数据的存储，因为它们由每个对服务器的请求来传递，这使得 `cookie` 速度很慢而且效率也不高。

###区别和联系
- `localStorage` 和 `sessionStorage` 一样都是用来存储客户端临时信息的对象。他们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。
- `localStorage` 生命周期是永久，这意味着除非用户显式地在浏览器提供的 UI 上清除 `localStorage` 信息，否则这些信息将永远存在。
- `sessionStorage` 生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过 `sessionStorage` 存储的数据也就被清空了。
- 不同浏览器无法共享 `localStorage` 或 `sessionStorage` 中的信息。
- 相同浏览器的不同页面间可以共享相同的 `localStorage`（页面属于相同域名和端口）
- 相同浏览器的不同页面或标签页间无法共享 `sessionStorage` 的信息。这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个 `iframe` 标签且它们属于同源页面，那么它们之间是可以共享 `sessionStorage` 的。
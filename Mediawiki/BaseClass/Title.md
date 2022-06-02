# Title (Class)

位置：`includes\Title.php`

Title是存储单个页面的对象

获取标题文字的功能在特殊页似乎执行不太正常

方法|类型|说明
-|-|-
`getPrefixedText()`|string|获取页面标题，不包括子页面，不包括#后面，下划线会被替换成空格
`getFullText()`|string|完整地址，`getPrefixedText()`加#号后面的部分

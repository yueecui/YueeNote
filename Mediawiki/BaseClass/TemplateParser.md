# TemplateParser

位置：`includes\TemplateParser.php`

用于处理mustache模板的内置类

## 构造
``` php
new \TemplateParser(__DIR__);
```
使用一个存有 mustache 模板的目录的路径来构造

## 使用

``` php
$templateParser->processTemplate('filename', $params)
```
调用时第一个参数是 mustache 模板的名字（不需要包括后缀），第二个参数是传递给模板的参数

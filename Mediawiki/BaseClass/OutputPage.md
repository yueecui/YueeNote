# OutputPage

位置：`includes\OutputPage.php`

用于最终渲染页面的类

方法|类型|说明
-|-|-
`addModule($modules)`|void|加载模块，包括JS和CSS
`addModuleScripts($modules)`|void|加载JS模块
`addModuleStyles($modules)`|void|加载CSS模块，与`addModule`不同的是，使用这个方法加载的模块会写在页面里通过`<link>`标签加载，可以避免抖动

# 编写新Api的注意事项

## 需要重载的方法

方法|返回类型|说明
-|-|-
`getAllowedParams()`||返回允许的参数配置，包括参数类型，是否必要等<br>返回值可以是<br>`(parameter name) => (default value)`<br>或是<br>`(parameter name) => (array with PARAM_* constants as keys)`<br>会用于校验参数和API说明页面
`getExamplesMessages()`||返回API说明页面的范例
`mustBePosted()`|bool|是否必须为post
`isWriteMode()`|bool|是否需要写主数据库
`execute()`||API真正执行过程
`getHelpUrls()`||返回额外的API说明地址

## 需要填写的msg

msg|说明
-|-
`apihelp-{$this->getModulePath()}-description`|API说明页面的描述<br>旧：`getDescription()`
`apihelp-{$this->getModulePath()}-param-{$param}`|API说明页面的参数的说明<br>旧：`getParamDescription()`

## 添加子模块

使用`ApiModuleManager`添加子模块，相关的action模块要在构筑时添加

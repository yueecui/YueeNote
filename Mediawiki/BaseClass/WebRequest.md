# WebRequest

位置：`includes\WebRequest.php`

处理用户访问的请求

大部分页面中都可以通过`getRequest()`方法获得该对象的实例

该对象中`data`属性为`$_POST+$_GET`（根据PHP的规则，POST的参数会优先）

方法|类型|说明
-|-|-
`getValues()`|array|获取全部输入值
`getValueNames($exclude = [])`|array|
`getCheck($name)`|bool|检查参数是否设置
`getVal($name, $default = null)`|string | null|
`getArray($name, $default = null)`|array | null|
`getIntArray($name, $default = null)`|array\|int | null|
`getInt($name, $default = 0)`|int|
`getIntOrNull($name)`|int | null|不存在时返回null
`getFloat($name, $default = 0.0)`|float|
`getBool($name, $default = false)`|bool|
`getFuzzyBool($name, $default = false)`|bool|不同的地方在：字符串"false"会被当作false处理
`getText($name, $default = '')`|string|可包括换行，一般是`<input>`或是`<textarea>`的值

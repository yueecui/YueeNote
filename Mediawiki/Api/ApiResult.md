# ApiResult (Class)

位置：`includes\api\ApiResult.php`

用于生成Api返回值的类，实例为`ApiBase`继承类中使用`getResult()`

方法|说明
-|-
`addValue($path, $name, $value, $flags)`|path为结果路径<br>array的话可以生成多层<br>name是key<br>flags是二进制flags，具体用时再查

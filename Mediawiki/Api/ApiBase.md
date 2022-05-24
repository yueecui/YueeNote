# ApiBase (Class)

位置：`includes\api\ApiBase.php`

方法|说明
-|-
`getResult()`|获得返回ApiResult（结果对象）
`extractRequestParams()`|获得所有参数
`addWarning( $msg, $code = null, $data = null )`|添加一个警告
`addError( $msg, $code = null, $data = null )`|添加一个错误
`dieWithError( $msg, $code = null, $data = null, $httpCode = null )`|出错时直接使用该方法跳出进行返回<br>可以使用`apiwarn-`和`apierror-`开头的msg

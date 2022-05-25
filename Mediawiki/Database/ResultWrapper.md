# ResultWrapper

位置：`includes\rdbms\database\resultwrapper\resultWrapper.php`

[Database select](Database_select.md)查询后返回的结果集对象

是个可迭代对象，一般情况下直接迭代即可

## 方法

方法|类型|说明
-|-|-
`numRows()`|int|返回结果集中的行数
`fetchObject()`|object|返回当前行的object<br>使用`$row->field`获取字段值<br>没有下一行时返回`false`
`fetchRow()`|array|返回当前行的array<br>使用`$row['filedname']`获取字段值<br>没有下一行时返回`false`
`seek($row)`|void|将结果集指针移动到指定行
`free()`|void|释放结果集，除非结果集特别大一般不用
`rewind()`|void|将结果集指针移动到第一行
`current()`|object|返回结果集中的当前行（`featchObject()`形式）
`key()`|int|返回结果集中的当前行的索引
`next()`|void|将结果集指针移动到下一行，并返回下一行（`featchObject()`形式）
`valid()`|bool|判断结果集当前行是否有效

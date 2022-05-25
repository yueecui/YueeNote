# Database

位置：`includes\rdbms\database\Database.php`
接口位置：`includes\rdbms\database\IDatabase.php`

Mediawiki操作数据库的类

操作对象可以通过全局方法 `wfGetDB()` 获得，具体请参考[全局函数](../GlobalFunction.md)。

## 方法
方法|返回类型|说明
--|--|--
[select](Database_select.md)|IResultWrapper|查询结果
[insert](Database_insert.md)|bool|插入数据
[update](Database_update.md)|bool|更新数据
`lastError()`|string|获取最后一次操作的错误信息

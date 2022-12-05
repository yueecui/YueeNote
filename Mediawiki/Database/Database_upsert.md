# Databased upsert

如果目标行存在，则执行UPDATE操作，不存在则执行INSERT操作。

``` PHP
public function upsert( $table, array $rows, array $uniqueIndexes, array $set, $fname = __METHOD__);
```

## 参数
`$table` (string)
:   需要更新数据所在的表名，会通过`Database::tableName()`转换为实际的表名。

`$rows` (array)
:   执行INSERT时的插入的数据

`$uniqueIndexes` (array)
:   检查插入数据`$rows`中的键值，如果对应符合值存在的项目存在，则会执行UPDATE操作。

`$set` (array)
:   执行UPDATE时更新的数据

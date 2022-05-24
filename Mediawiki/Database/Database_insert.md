# Databased insert

执行一个INSERT请求，返回是否成功。

``` PHP
/**
 * INSERT wrapper, inserts an array into a table.
 * 
 * @param string $table Table name. This will be passed through
 *   Database::tableName().
 * @param array $a Array of rows to insert
 * @param string $fname Calling function name (use __METHOD__) for logs/profiling
 * @param array $options Array of options
 *
 * @return bool
 */
public function insert( $table, $a, $fname = __METHOD__, $options = [] );
```

## 参数
`$table` (string)
:   插入的表名，会通过`Database::tableName()`转换为实际的表名。

`$a` (array)
:   插入的数据。格式可以是两种之一：
    - 映射表，键值为字段名，值为数据。如果值为`null`，则会插入`NULL`。
        ``` php
        [
            'field1' => 'value1',
            'field2' => 'value2',
            'field3' => 'value3',
        ]
        ```
    - 一个数字键值的array，每个值为一个上述映射表array，使用此法会插入多个数据。每个子array的键值必须相同并且顺序相同

    如果出现错误，会掷出一个`DBQueryError`错误，如果错误明确被忽略，则返回成功

`$options` (array)
:   选项。格式与`Database::select()`相同。
    支持的选项有：
    值|类型|说明
    -|-|-
    IGNORE|boolean|如果设置，则忽略重复键值的错误，并且不会插入会导致错误键值错误的行。可以使用`IDatabase::affectedRows`来确定成功插入了多少行

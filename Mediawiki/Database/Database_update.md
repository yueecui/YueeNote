# Databased update

执行一个UPDATE请求，需要设置一个条件和需要设定的值

``` PHP
/**
 * UPDATE wrapper. Takes a condition array and a SET array.
 *
 * @param string $table Name of the table to UPDATE. This will be passed through
 *   Database::tableName().
 * @param array $values An array of values to SET. For each array element,
 *   the key gives the field name, and the value gives the data to set
 *   that field to. The data will be quoted by IDatabase::addQuotes().
 *   Values with integer keys form unquoted SET statements, which can be used for
 *   things like "field = field + 1" or similar computed values.
 * @param array $conds An array of conditions (WHERE). See
 *   IDatabase::select() for the details of the format of condition
 *   arrays. Use '*' to update all rows.
 * @param string $fname The function name of the caller (from __METHOD__),
 *   for logging and profiling.
 * @param array $options An array of UPDATE options, can be:
 *   - IGNORE: Ignore unique key conflicts
 *   - LOW_PRIORITY: MySQL-specific, see MySQL manual.
 * @return bool
 */
public function update( $table, $values, $conds, $fname = __METHOD__, $options = [] );
```

## 参数
`$table` (string)
:   需要更新数据所在的表名，会通过`Database::tableName()`转换为实际的表名。

`$values` (array)
:   更新的数据。键值为字段名，值为数据。其中数据会通过`IDatabase::addQuotes()`转义。
    数字键值的语句会形成未转义的SET语句，所以可以使用`field = field + 1`类似的计算值，但需要小心不要使用用户输入的数据以免被注入。

`$conds` (array)
:   更新的条件。格式参考`IDatabase::select()`。如果设为`'*'`则更新所有行。

`$options` (array)
:   选项。格式与`Database::select()`相同。
    支持的选项有：
    值|类型|说明
    -|-|-
    IGNORE|boolean|如果设置，则忽略重复键值的错误，并且不会插入会导致错误键值错误的行
    LOW_PRIORITY|boolean|MySQL特有，参考MySQL手册

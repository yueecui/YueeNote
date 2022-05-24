# Databased select

执行一个SELECT请求，返回结果集。

``` PHP
/**
 * Execute a SELECT query constructed using the various parameters provided.
 * See below for full details of the parameters.
 * 
 * @param string|array $table Table name
 * @param string|array $vars Field names
 * @param string|array $conds Conditions
 * @param string $fname Caller function name
 * @param array $options Query options
 * @param array $join_conds Join conditions
 * 
 * @return IResultWrapper|bool
 */
	public function select(
		$table, $vars, $conds = '', $fname = __METHOD__,
		$options = [], $join_conds = []
	);
```
## 参数
`$table` (string|array)
:   可以是一个表名(string)或是一组表名(array)
    使用array时，可以指定表别名
    例如： `[ 'a' => 'user' ]`
    a可以作为别名，在字段名使用。例如（`a.user_name`）
    所有表名会通过`Database::tableName()`，所以会自动选用前缀，或是映射表配置等
    小心使用不被信任的用户输入的表名，可能遭到注入

`$vars` (string|array)
:   可以是一个字段名(string)或是一组字段名(array)
    字段名可以是一段完整的SQL片段，用于直接包含在`SELECT`中
    使用array时，可以指定字段别名
    例如： `[ 'maxrev' => 'MAX(rev_id)' ]`
    小心使用不被信任的用户输入的表名，可能遭到注入

`$conds` (string|array)
:   可以是一个条件语句(string)或是一组条件语句(string)
    使用array时，各个条件之间的关系均为`AND`
    array元素可以使用以下两种形式之一
    - 使用数字键值，将会是一个源生SQL片段
    - 使用字符串键值，将会形成一个键值为字段名的相等条件
      - 如果值为一个非array值时，值将会被视为相等的数据；如果值为`null`，则会使用`IS NULL`
      - 如果值为一个array时，则会使用`IN (…)`的形式来匹配array中的非空元素；如果array中有`null`，则会额外添加一个`IS NULL`的子句，以便来匹配元素中的绝大部分。所有非空元素将会使用引用形式
    在字符串键值模式下的用户输入值是安全的，在数字键值模式下和字符串键值中不应使用用户输入的信息，可以使用`IDatabase::addQuotes()`来转义数字键值中使用的不受信任的输入

`$options` (string|array) *可选*
:   查询选项。boolean类型的选项使用数字键值模式，值为指定的选项字符串。
    例如： `[ 'FOR UPDATE' ]`
    可用的项目包括
    值|类型|说明
    -|-|-
    OFFSET|number|跳过多少行，理论上可以对结果集进行分页，但因为性能问题，不鼓励这样做
    LIMIT|number|返回行数
    FOR UPDATE|boolean|在查询结果集中加入`FOR UPDATE`锁，锁定返回的行，以便在下一次COMMIT之前不能更改它们
    DISTINCT|boolean|在查询结果集中去除重复行
    GROUP BY|string\|array|可以是一个用于分组的字段名或表达式的SQL片段字符串，也可以是此类字符串的array
    HAVING||May be either an string containing a HAVING clause or an array of conditions building the HAVING clause. If an array is given, the conditions constructed from each element are combined with AND.
    ORDER BY|string\|array|可以是一个用于排序的字段名或表达式的SQL片段字符串，也可以是此类字符串的array
    USE INDEX|string\|array|这可以是一个字符串，给出用于查询的索引名称，也可以是一个数组。 如果它是一个关联数组，每个键给出表名（或别名），每个值给出用于该表的索引名。 所有字符串都是 SQL 片段，因此应由调用者验证。
    EXPLAIN|boolean|在 MySQL 中，这会导致运行 EXPLAIN SELECT 查询，而不是SELECT。
    除此之外，还支持以下boolean类的MySQL扩展，请参考MySQL手册的文档
    - LOCK IN SHARE MODE
    - STRAIGHT_JOIN
    - HIGH_PRIORITY
    - SQL_BIG_RESULT
    - SQL_BUFFER_RESULT
    - SQL_SMALL_RESULT
    - SQL_CALC_FOUND_ROWS
    - SQL_CACHE
    - SQL_NO_CACHE

`$join_conds` (string|array) *可选*
:   对于特定表可选的`join`条件，一般来讲，这是不必要的，因为可以使用`$conds`。不过对于执行`LEFT JOIN`很有用
    array的键值为表的名称或是别名，值是一个两元素的array，键值分别是0和1
    第一个值为`join`的类型，第二个与`$conds`中的参数要求相同，因此它也可以是一个SQL片段字符串，或是这类字符串的array，当使用array时，所有条件关系为`AND`
    例如：`[ 'page' => [ 'LEFT JOIN', 'page_latest=rev_id' ] ]`

## 返回值
`IResultWrapper|bool`
:   如果查询没有结果（0行），会返回一个0行的`IResultWrapper`对象。
    如果查询出现错误，会掷出一个`DBQueryError`错误，除非`ignore errors`设定，否则会返回false

# 全局

## 对象

对象|类型|说明
-|-|-
`$wgUser`|[\User](BaseClass/User.md)|当前访问用户的信息

## 方法

方法|类型|说明
-|-|-
`wfGetDB( $db, $groups = [], $wiki = false )`|`\Wikimedia\Rdbms\Database`|第一个参数可以指定<br>`DB_MASTER`：用于写请求<br>`DB_REPLICA`：用于读请求

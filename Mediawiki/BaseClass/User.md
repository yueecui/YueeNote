# User (Class)

位置：`includes\user\User.php`

## 静态函数
通过该方法可以获取特定用户的实例

方法|类型|说明
-|-|-
`newFromName( $name, $validate = 'valid' )`|User\|bool|返回User，如果验证失败则返回false
`newFromId( $id )`|User|返回User
mail

## 方法
| 方法                   | 类型   | 说明                                               |
| ---------------------- | ------ | -------------------------------------------------- |
| `getId()`              | int    | 0表示匿名或不存在                                  |
| `getName()`            | string | 匿名用户显示IP地址                                 |
| `getEmail()`           | string |
| `getRights()`          | array  | 获取用户权限列表                                   |
| `getEffectiveGroups()` | array  | 用户所属的权限组列表                               |
| `getAutomaticGroups()` | array  | 用户所属的自动权限组<br>主要是*/user/autoconfirmed |
| `isLoggedIn()`         | bool   | 是否登录                                           |
| `isAnon()`             | bool   | 是否匿名                                           |
`sendMail($subject, $body, $from, $replyto)`|Status|发送邮件给该用户

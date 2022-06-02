# UserMailer

位置：`includes\mail\UserMailer.php`

本类全都是静态函数，不需要实例化

## send

```php
/**
 * This function will perform a direct (authenticated) login to
 * a SMTP Server to use for mail relaying if 'wgSMTP' specifies an
 * array of parameters. It requires PEAR:Mail to do that.
 * Otherwise it just uses the standard PHP 'mail' function.
 *
 * @param MailAddress|MailAddress[] $to Recipient's email (or an array of them)
 * @param MailAddress $from Sender's email
 * @param string $subject Email's subject.
 * @param string $body Email's text or Array of two strings to be the text and html bodies
 * @param array $options Keys:
 *     'replyTo' MailAddress
 *     'contentType' string default 'text/plain; charset=UTF-8'
 *     'headers' array Extra headers to set
 *
 * @throws MWException
 * @throws Exception
 * @return Status
 */
public static function send( $to, $from, $subject, $body, $options = [] )
```

`$to` (MailAddress|MailAddress[])
:   收件人的邮箱地址对象。该对象可以通过`new MailAddress()`或`MailAddress::newFromUser($user)`来创建

`$from` (MailAddress)
:   发件人的邮箱地址对象

`$subject` (string)
:   邮件的主题

`$body` (string|array)
:   邮件的正文，可以是字符串或者是一个数组，如果是数组，则第一个值为正文，第二个值为html版的正文

`$options` (array)


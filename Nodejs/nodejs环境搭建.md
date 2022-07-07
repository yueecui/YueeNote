# node.js环境搭建初级指南

## 1.安装NVM

NVM是Node.js version manager的缩写

在 https://github.com/coreybutler/nvm-windows/releases 下载最新版本。要选择安装版，因为要注册全局环境变量。

使用该管理器的目的为可以同时安装多个版本的`node.js`，以备不时之需，如已安装`node.js`也无妨，该管理器会自动接管之前安装的版本

### 更换镜像源

安装好nvm后，需要先执行以下指令替换镜像源

镜像源是使用node.js的包管理器时下载需要的包时访问的服务器地址，原地址国内访问困难，替换的地址是国内的镜像源，速度快，且效果相同

```bash
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/
```

### 常用指令

指令|说明
-|-
`nvm list`|列出已安装的版本
`nvm list available`|列出可用的版本
`nvm install <版本号>`|安装指定版本
`nvm use <版本号>`|使用指定版本（需要Windows管理员权限）

## 2.安装Node.js

以管理员身份运行“命令提示符”（cmd）

通过下面的命令查询现在可供安装的`node.js`版本
```bash
nvm list available
```

一般推荐的版本为：
- 大版本号为偶数版本
- 不是最新的
- 小版本号最新的

例如目前（2022年7月7日），最新的偶数大版本为18，所以选择次新的16，其中16的小版本号最新的是16.15.1，所以选择16.15.1，使用如下指令安装

```bash
nvm install 16.15.1
```

安装完成后，使用下面的命令行切换到指定版本
```bash
nvm use 16.15.1
```

切换完成后，使用下面的命令行确认是否切换成功，正常显示出版本号即可
```bash
> node -v
v16.15.1
```

## 3.包管理器

包（package）是由其他人预先写好的代码，通常用于实现某个功能，包管理器（package manager）则是负责安装、管理包的工具

`node.js`自带的包管理器叫`npm`，常用的还有`yarn`和`pnpm`

对于像我一样的初级用户，他们的功能都是一样的，但是使用默认的管理器感觉不够时髦，所以我选`yarn`

### npm

`npm`的常用指令

指令|说明
-|-
`npm install <包名>`|安装指定包，添加`-g`参数时，会向全局环境安装
`npm install`|不加包名，会读取当前目录的`package.json`进行安装
`npm uninstall <包名>`|卸载指定包，添加`-g`参数时，会卸载全局环境中的包
`npm list`|列出已安装的包，添加`-g`参数时，列出全局环境中的包

### yarn

`yarn`本质也是一个包，所以需要通过自带的`npm`来安装，像极了你用`IE`下`Chrome`的样子

通过下面的命令可以安装`yarn`
```bash
npm install -g yarn
```
因为`yarn`只是管理包的工具，不参与实际代码生产，所以我们安装在全局，方便在各个项目中使用。而对于项目实际中需要用到的包，最好还是装到项目的环境中，避免更换运行地点时，因为环境差异导致缺包，代码无法运行

安装好后可以通过下面的命令行确认是否安装成功
```bash
> yarn -v
1.22.19
```

`yarn`的常用指令

指令|说明
-|-
`yarn add <包名>`|安装指定包
`yarn`|直接执行时，会读取当前目录的`package.json`进行安装
`yarn remove <包名>`|卸载指定包
`yarn list`|列出已安装的包


到这里，`node.js`本身的环境就安装完毕了。


# NVM
NVM是Node.js version manager的缩写

在 https://github.com/coreybutler/nvm-windows/releases 下载最新版本

## 更换镜像

```bash
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/
```

## 常用指令

指令|说明
-|-
`nvm list`|列出已安装的版本
`nvm list available`|列出可用的版本
`nvm install <版本号>`|安装指定版本
`nvm use <版本号>`|使用指定版本（可能需要管理员权限）

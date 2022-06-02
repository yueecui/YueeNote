# Dockerfiler

Dockerfile是一个纯文本文件，用来描述一个Docker镜像，它是一个Dockerfile的简单语法糖，它可以被docker build命令解析，并且可以被docker run命令解析。

## 可用指令

指令|说明
-|-
`FROM`|从一个镜像构建一个新的镜像
`RUN`|在创建镜像时执行一个命令
`COPY`|复制文件到 Docker 容器中
`EXPOSE`|映射一个端口
`CMD`|容器启动后执行的命令
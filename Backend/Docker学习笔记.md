# Docker学习笔记

指令|说明
-|-
`docker build -t <image-name> .`|使用当前目录（`.`表示当前目录）下的Dockerfile来创建image
`docker run --name <container-name> -dp 8080:80 <image-name> -v <volume-name>:<path>`|以image创建container，将本地的8080端口，映射到container的80端口上<br>`-d` 表示后台模式，容器在后台一直运行<br>`-v` 挂载volume到指定目录，指定目录的操作将被捕获转到volume中进行操作
`docker ps`|列出现在正在运行的所有container
`docker stop <container-id>`|停止<container-id>运行
`docker rm <container-id>`|移除<container-id>，加-f可以停止+移除
`docker tag <image-name> USER-NAME/<image-name>`|为image打tag，可以push到服务器
`docker push USER-NAME/<image-name>`|push image到服务器
`docker volume create <volume-name>`|创建volume
`docker network create <name>`|

#### docker run
参数|说明
-|-
`--name <container-name>`|指定一个容器的名字，不指定的话会随机生成名字
`-d`|后台模式 ，容器会在后台一直运行
`-p 8080:80`|将主机的8080端口（第一个）<br>映射到container的80端口（第二个）
`-v <volume-name>:<path>`|挂载volume到指定目录，指定目录的操作将被捕获转到volume中进行操作
`-v <abs-path>:<path>`|将主机目录挂载到指定目录<br>在powershell里可以用`$(pwd)`获取当前目录
`-w <path>`|container的工作目录，命令从该目录运行

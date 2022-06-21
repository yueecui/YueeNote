# 冲突
steamcommunity_302工具会和nginx冲突，记得关闭

# 查询现在运行着的nginx进程
tasklist | findstr "nginx.exe"

# 启动
执行nginx.exe（建议任务管理器，cmd会直接卡住cmd）

# 重置nginx配置
nginx.exe -s reload

# 关闭
nginx.exe -s quit
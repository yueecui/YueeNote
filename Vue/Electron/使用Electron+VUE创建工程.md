# 使用Electron+VUE创建工程

- 安装vue/cli
  - `npm install -g @vue/cli`，需要全局安装
- 创建工程
  - `vue create <project-name>`
- 进入工程目录，安装Electron Builder
  - `vue add @vue/cli-plugin-electron-builder`
- 使用Typescript时会出现类型错误，需要修正`src\background.ts:57`
    ``` typescript
    app.on('ready', async () => {
        if (isDevelopment && !process.env.IS_TEST) {
            // Install Vue Devtools
            try {
            await installExtension(VUEJS3_DEVTOOLS)
            } catch (e: unknown) {
            console.error('Vue Devtools failed to install:', (e as ErrorConstructor).toString())
            }
        }
        createWindow()
    })
    ```
- 其他可参考[样例工程](https://github.com/yueecui/vajra-project-ts-electron-vue)

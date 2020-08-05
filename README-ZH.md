## 同步代码到 GitHub

1. GitHub 上新建一个项目仓库(过程略)
2. 构建本地仓库并同步

- 生成本地仓库 master 分支
  - `git init` 生成工作区
  - `git add .` 添加到暂存区
  - `git commit -m "init app"` 提交到版本区
  - `git remote add origin https://github.com/CrowBlock8192/react-admin.git` 关联远程仓库
  - `git push -u origin master` 推送分支
  - `git checkout -b dev` 创建并切换 dev 分支
  - `git push origin dev` 推送 dev 分支到远程仓库
- 克隆远程仓库代码进行开发
  - `git clone https://github.com/CrowBlock8192/react-admin.git` 克隆远程代码
  - `cd react-admin` cd 到项目目录下
  - `git checkout -b dev origin/dev` 生成并切换本地 dev
  - `git add .` 将更新的内容加入暂存区
  - `git commit -m "同步内容描述"` 提交要更新的内容
  - `git push origin dev` 推送 dev 分支到远程仓库

## 项目目录构建

`src`下目录结构:

| Dir-Name   | 作用       |
| ---------- | ---------- |
| api        | ajax 相关  |
| asstes     | 公共资源   |
| components | 非路由组件 |
| pages      | 路由组件   |
| config     | 配置       |
| utils      | 工具模块   |
| App.js     | 应用根组件 |
| index.js   | 入口 js    |

## 安装依赖

| 依赖名称            | 作用                             | 命令                         |
| ------------------- | -------------------------------- | ---------------------------- |
| antd                | UI 组件库                        | yarn add antd                |
| craco               | 自定义默认配置                   | yarn add @craco/craco        |
| react-app-rewired   | 修改 create-react-app 配置的工具 | yarn add react-app-rewired   |
| customize-cra       | 扩展 create-react-app 配置的工具 | yarn add customize-cra       |
| babel-plugin-import | 按需引入组件                     | yarn add babel-plugin-import |
| less                | css 预编译器                     | yarn add less@5.0.0          |
| less-loader         | 将 less 编译为 css               | yarn add less-loader         |
| react-router-dom         | 将 less 编译为 css               | yarn add react-router-dom         |

此处直接安装`less`会报错,所以必须安装`less@5.0.0`的指定版本

配置按需加载

创建配置文件 `config-overrides.js`

```javascript
  const { override, fixBabelImports, addLessLoader } = require('customize-cra')
  module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      modifyVars: { '@primary-color': '#1DA57A' },
      javascriptEnabled: true,
    }),
  )
```

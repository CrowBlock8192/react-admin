### 同步代码到GitHub
1. GitHub上新建一个项目仓库(过程略)
2. 构建本地仓库并同步
- 生成本地仓库 master分支
  - `git init` 生成工作区
  - `git add .` 添加到暂存区
  - `git commit -m "init app"` 提交到版本区
  - `git remote add origin https://github.com/CrowBlock8192/react-admin.git` 关联远程仓库
  - `git push -u origin master` 推送分支
  - `git checkout -b dev` 创建并切换dev分支
  - `git push origin dev` 推送dev分支到远程仓库
- 克隆远程仓库代码进行开发
  - `git clone https://github.com/CrowBlock8192/react-admin.git` 克隆远程代码
  - `cd react-admin` cd 到项目目录下
  - `git checkout -b dev origin/dev ` 生成并切换本地dev
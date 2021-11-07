# xm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 01 初始化项目 托管到github上 步骤
  > 先在git上新建一个含README.md的仓库，修改分支名称master（为了和本地仓库一致--不修改默认会是main）；
  > 本地目录通过 git clone https://github.com/hub-lxy/xm-1010.git 克隆远程项目
  > 通过vue-cli脚手架初始化项目
  > 将项目拷贝到通过git管理的本地目录下
  > 再通过命令
      >> git add.
      >> git commit -m "提交信息"
      >> git remote set-url origin https://（远程git的token值）@github.com/（用户名）/（仓库名）.git
      >> git push -u origin master
  > 创建分支： git checkout -b dev-login    (主分支要干的是推送/上线---dev-login不用push（git add ./git commit -m '内容'）---小功能开发完成之后合并到master分支，再由master分支进行推送)       注：commit 每完成一个小功能就commit一次/push操作master去完成
  > 查看当前分支： git branch

### 02 登录模块：
  > 启动后台程序： 先按要求新建数据库（通过 navicat 创建）再通过 node app.js 启动后台程序
  > 保存登录成功之后的token值 -- localstorage
  > 在登录成功之后跳转的页面，判断是否含有保存的token值来判断该用户是不是直接通过跳过登录界面直接进入后台系统的

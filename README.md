# creatshare-app-init

[![](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/creatshare-app-init) [![](https://img.shields.io/badge/eslint-standard-green.svg)](https://eslint.org/) ![](https://img.shields.io/badge/contributors-2-blue.svg) [![](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/creatshare-demos/creatshare-app-init/blob/master/LICENSE)

CreatShare 互联网实验室前端 Web App 项目初始化工具

## 安装

```
➜  npm install -g creatshare-app-init
```

或

```
➜  yarn global add creatshare-app-init
```

## 命令手册

示例

```
➜  cs create <project-name> # 使用 cs 脚手架快速创建一个最小化 Web App 项目
```

具体内容

```
 Usage: cs [options] [command]

 CreatShare 互联网实验室前端 Web App 项目脚手架


 Options:

    -V, --version  output the version number
    -e, --enjoy
    -h, --help     output usage information


 Commands:

    create <dir>  创建一个新的 Web App 项目骨架
```

## 结构

该项目结构如下

```
.
├── LICENSE         # 开源协议
├── README.md       # 项目介绍
├── bin             # cs 命令主目录
│   └── index.js    # cs 命令引导文件
├── dist           # cs create 命令参考的模板
├── package.json    # 项目配置
├── src             # cs 命令依赖的源代码
│   ├── create.js   # cs create 命令源码
│   └── cs.js       # cs 命令源码入口文件
└── yarn.lock       # yarn 包管理器依赖说明
```

```cs``` 命令复制 dist 文件夹的内容，生成的项目结构如下

```
.
├── .eslint.js           # JavaScript 代码规范
├── .gitignore           # Git 忽略特殊文件
├── README.md            # 项目介绍
├── index.js             # 项目入口文件
├── package.json         # 项目配置文件
├── public               # 公用资源目录
│   ├── favicon.ico      # 网页图标
│   ├── index.html       # 项目主页
│   └── manifest.json    # 网络应用清单
└── src                  # 开发目录
    ├── images           # 图片资源目录
    ├── style            # 样式文件资源目录
    └── app.js           # 源码入口文件
```

# 贡献

欢迎你的 PR

# 开源协议

[MIT LICENSE](./LICENSE)

# CreatShare 互联网实验室

![CreatShare-logo-powerby.png](./CreatShare-logo-powerby.png)
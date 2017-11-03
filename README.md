# creatshare-app-init

[![](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/creatshare-app-init) [![](https://img.shields.io/badge/eslint-standard-green.svg)](https://eslint.org/) ![](https://img.shields.io/badge/contributors-2-blue.svg) [![](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://github.com/creatshare-demos/creatshare-app-init/blob/master/LICENSE)
[![](https://img.shields.io/badge/version-v2.1.1-yellow.svg)](https://www.npmjs.com/package/creatshare-app-init)

![](./img/robot.png)

初级 Web App 项目初始化工具，CreatShare 互联网实验室荣誉出品

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
├── .babelrc         # ES6 代码转义规则配置
├── .eslintrc.js     # JavaScript 代码规范配置
├── .gitignore       # Git 不跟踪的特殊文件
├── LICENSE          # 开源协议
├── README.md        # 项目介绍
├── bin              # cs 命令主目录
│   └── index.js     # cs 命令引导文件
├── dist             # cs create 命令参考的模板
├── img              # README.md 引用的图片库
├── lib              # cs 命令依赖的源代码编译成 ES5 后的代码
├── package*.json    # 项目配置
├── src              # cs 命令依赖的源代码
│   ├── create.js    # cs create 命令源码
│   └── cs.js        # cs 命令源码入口文件
└── yarn.lock        # yarn 包管理器的依赖说明
```

其中，dist 文件夹的结构如下

```
.
├── .babelrc             # ES6 代码转义规则配置
├── .eslint.js           # JavaScript 代码规范
├── .gitignore           # Git 不跟踪的特殊文件
├── LICENSE              # 开源协议
├── README.md            # 项目介绍
├── material             # README.md 引用的图片库
├── package.json         # 项目配置文件
├── src                  # 源码开发目录
│   ├── favicon.ico      # 网页标题小图标
│   ├── html             # HTML 页面模板目录
│   ├── image            # 图片资源目录
│   ├── manifest.json    # 网络应用清单
│   ├── script           # 脚本文件资源目录
│   └── style            # 样式文件资源目录
├── webpack.config.js    # Webpack 多文件打包基础配置
├── webpack.dev.js       # Webpack 开发环境配置
├── webpack.prod.js      # Webpack 发布上线配置
└── yarn.lock            # yarn 包管理器的依赖说明
```

该结构即是 ```cs create <app_name>``` 命令生成的模板来源

# 贡献

欢迎你的 PR

# 开源协议

[MIT LICENSE](./LICENSE)

# CreatShare 互联网实验室

![CreatShare-logo-powerby.png](./img/CreatShare.png)
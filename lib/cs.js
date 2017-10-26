'use strict';

var create = require('./create');
var path = require('path');
var distPath = path.join(__dirname, '/../dist');
var dist = process.cwd() + '/';

var helpGuide = function helpGuide() {
  console.log('.');
  console.log('├── .babelrc             # 转码配置文件');
  console.log('├── .eslint.js           # 实验室代码规范');
  console.log('├── .gitignore           # 版本控制忽略文件配置');
  console.log('├── LICENSE              # 开源协议');
  console.log('├── README.md            # 项目介绍');
  console.log('├── material             # 素材');
  console.log('│   └── CreatShare.png   # 实验室标志');
  console.log('├── package.json         # 项目配置');
  console.log('├── src                  # 开发目录');
  console.log('│   ├── favicon.ico      # 网页小图标');
  console.log('│   ├── html             # 网页模板');
  console.log('│   ├── images           # 图片资源目录');
  console.log('│   ├── manifest.json    # 网络应用清单');
  console.log('│   ├── script           # 脚本代码目录');
  console.log('│   └── style            # 样式资源目录');
  console.log('├── webpack.config.js    # 打包配置基础文件');
  console.log('├── webpack.dev.js       # 开发环境打包配置');
  console.log('├── webpack.prod.js      # 生产环境打包配置');
  console.log('└── yarn.lock            # 项目配置@Yarn');
  console.log();
  console.log('11 directories, 14 files');
  console.log('\n项目目录创建完毕\n');
  console.log('注意事项：');
  console.log('1. 接下来请使用 npm install、 yarn add 或 cnpm install 命令安装依赖');
  console.log('2. 遇到使用问题可以向本仓库提 issue:');
  console.log('    https://github.com/creatshare-demos/creatshare-app-init');
};

/**
* [运行 create 命令]
* @return {[type]} [description]
*/
exports.create = function (rootDir) {
  console.log('\n项目目录开始创建\n');
  create.init(distPath, dist, rootDir);
  helpGuide();
};
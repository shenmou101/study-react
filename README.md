# git常用操作

## 基本操作
```
git config --global alias.st status   //设置git的快捷键 git status 为 git st

git checkout -- a.js    //撤销未add的文件a.js的更改
git checkout -- .    //撤销当前文件夹下所有文件的更改

git remote add origin git@github.com:dddjj/git-demos.git     //添加远程仓库的连接

git remote -v   //查看本机连接的远程仓库

git remote rm origin    //删除本机的远程origin的连接

git log     //查看git操作记录

git show 版本号     //查看某次提交的更改内容


```

## 分支
### 结构
 - master 
 - develope     开发分支
    - feature   开发新功能分支
    - bug       修复bug分支
 - release      上线部署分支

```
git branch      //查看所有分支

git stash       //把当前的修改暂存起来

git checkout -b dev     //创建新分支dev并切换到此分支上

git merge master bug        //将bug分支合并入master

git reset --hard 版本号     //强制回退到指定的版本号


```

## npm
```
npm init        //init a npm package
npm init -y     //init a npm package quickly

npm install npm -g      //update npm
npm install react --save        //install react and add a dependency in package.json   
npm install react --save-dev        //install .. only if you want use react in development environment         

npm config set registry http://registry.npm.taobao.org      //set npm remote mirroring to taobao

npm config set logleval=http        //show the installation progress

npm update express      //update express 

npm adduser     //add user to publish your package

npm publish     //publish your package

```


## 课纲
babel
- babel-cli      命令行
- babel-core         核心库
- babel-polyfill     
- babel-preset-es2015   ES6预设

presets
plugins

gulp
webpack

es6 常用语法

es6 函数（函数式编程）


## 安装
```

babel5.0后把核心拆分成各个包

npm install babel-cli --save-dev    //安装babel的命令行包

npm install babel-cli -g        //安装全局的babel命令行包


```

## 基本使用

```
babel index.js --out-file b.js      //compile single file 
babel index.js -o a.js      //shortcut of compiling single file

babel src --out-dir build       //compile directive(src) to directive(build)
babel src -d build      // shortcut of compiling directive(src) to directive(build)

```

## 实战使用

```
安装 babel-cli babel-preset-es2015      //可以编译es6语法级的代码 如箭头函数

配置 .babelrc 的 presets

配置 package.json 的 script

命令行执行 npm run build 

```

## .babelrc配置
### preset 预设
```
es6
react
```

### plugins 插件
```
babel-plugin-transform-runtime
babel-runtime       //将一些公共代码进行封装和引入 简化代码

babel-preset-stage-0        //体验es7 stage0阶段
```

## 其他模块
```
babel-polyfill      //可以编译es6 api级的代码 如Array.from()

```

## gulp
gulp + babel

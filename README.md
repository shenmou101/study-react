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
# Webpack Demo

- es6
- webpack webpack-server
- babel 

git

shell

npm

## 流程
1.全局安装
- npm install webpack -g

2.开发态安装
- npm install webpack --save-dev
- npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --save-dev

3.创建webpack.config.js

4.配置webpack.config.js

- 命令行设置配置文件 webpack --config conf.js(默认webpack.config.js)
- 编写配置文件
```
var webpack = require('webpack');

// console.log(webpack);

// webpack.optimize
// webpack.DefinePlugin()

function rewriteUrl(replacePath){
	return function(req,opt){
		var queryIndex = req.url.indexOf("?");
		var query = queryIndex >= 0 ? req.url.substr(queryIndex):"";
		req.url = req.path.replace(opt.path,replacePath) + query;
		console.log("rewriting",req.originalUrl,req.url);
	}
}

// 引用这个plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 这里省略其他配置代码


module.exports = {
	entry:[
		'babel-polyfill',
		'webpack-dev-server/client?http://localhost:8080',
		'./src/index.js'
	],		//多入口
	output: {		//导出
		path:'/public/',
		filename:'bundle.js'	//name就是多入口的key
	},
	module:{
		loaders:[
			{
				test:/\.js$/,		//正则 匹配某一类文件
				loader:'babel-loader'		//loader 和loaders(后面跟数组) 有区别
			},
			{
				test: /\.css/,
				loader:"style!css"
			}
		]
	},
	resolve:{
		extension:['','.js','.jsx','.css'],
		alias:{}
	},
	devtool:"cheap-module-source-map",
	devServer:{
		progress: true,		//进度显示
		contentBase:'public',	//网站根目录
		stats:{colors:true},	//颜色
		inline:true,	//热替换
		publicPath:'/static/',	//导出文件目录
		proxy:[
			{
				path:/^\/api\/(.*)/,	//匹配接口如 /api/test/ee
				target: "http://localhost:8080/",
				rewrite: rewriteUrl('/$1\.json'),	//请求后指定取得的json文件模拟数据
				changeOrigin: true
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'zhufeng-react',
			template: './src/index.html',
		})
	]
}

```

- 执行命令行指令进行编译
```
webpack     //开发环境下编译
webpack -p  //产品编译及压缩
webpack --progress  //打印编译进度
webpack --progress -color   //打印彩色编译进度
webpack --display-error-details     //编译时显示错误详情

```

### 前端资源
- js: babel babel-loader preset plugin
- 模板：HTML ejs handlebars...
- css: less stylus sass: css-loader style-loader less-loader sass-loader...
- 图片: png gif jpg
- 图标字体：tff eot woff2 svg
- json
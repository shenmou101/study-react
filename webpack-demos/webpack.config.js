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
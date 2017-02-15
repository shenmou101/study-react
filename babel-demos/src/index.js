
//块级作用域
(function f1(){
	let n = 5;
	if(true){
		let n = 10;		// 只在if里生效
	}
	console.log(n);		// 5
})()

//变量提升
console.log(a);		// undefined
console.log(b);		// 2 
var a = 1;
let b = 2;

//定义常量
const c = 1;
/*c = 2;
console.log(c);*/

//箭头函数
const d = b => b+2;
var d2 = function(b){
	return b+2;
}

const Template = {
	test: function(){
		console.log(this);		//Template
		$('#event').on('click',()=>{
			console.log(this)		//Template 箭头函数没有this指针 所以和上层的this一致
		})
	}
};
//Template.test();

//Class 关键字

/* 传统方式
function Animal(){
	this.a = 222;
}
Animal.prototype = {
	//....
}
*/
class Animal{		//Animal类
	constructor(name){		//ES6新型构造器
		this.name = name;
	}
	//实例方法-原型上的方法
	sayName(){		//Animal.prototype.sayName
		console.log('My name is' + this.name)
	}
}
//类的继承
class Programmer extends Animal{
	constructor(name){
		super(name)
	}
	program(){
		console.log('I am comming...')
	}
}

//对象字面量增强
/*
1.属性的简写
2.方法的简写
3.快速设置原型（继承）
*/
let a2 = 1;
let b2 = 2;

let obj = {		
	a2,		//ES6 a2:a2的省略写法
	b2,
	breathe(){		//同上 方法的省略写法
		console.log('b')
	},
	__proto__: Animal 	//设置此对象的原型为Animal，相当于继承human
};

//模板字符串
/*
//传统方式拼接html字符串片段
let html = [];
html.push('<div>'+ a +'</div>');
*/
let html = `<div>${a}
	<h2>${b}</h2>
</div>`
console.log(html);

//解构
/*对象的解构*/
var res = {
	a3:1,
	b3:1,
	c3:1,
	d3:1
}
/*
var x = res.a;
var y = res.b;
...
*/
let {a3,b3} = res;
console.log(a3,b3)
/*数组的解构*/
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);	
/*字符串的解构*/
const [a4,b4,c4,d4,d5] = 'hello';
console.log(a4,b4,c4,d4,d5);


//函数参数 Default Rest
/*function sayGood(name){
	var name = name||'aaa';		//容错处理
	console.log('Good'+name);
}*/
function sayGood(name='defaultValue'){		//ES6设置参数的默认值
	console.log('Good'+name);
}
sayGood();		//Good defaultValue

function restFunc(a,...rest){ 		//ES6迭代参数
	console.log(a);
	console.log(rest)
};
restFunc(1);		//1 []
restFunc(1,2,3,5);		//1 [2,3,5]

var people = ['zf','john','mike'];
function sayHello(people1,people2,people3){
	console.log(`Hello${people1},${people2},${people3}`)
}
sayHello(...people)


//Set Map
var s = new Set();
s.add('hello').add('hello').add('hello');
s.size === 2;
s.has('hello') === true;

var s2 = new Map();
s2.set('hello', 22);


/*Proxies*/
//定义被侦听的目标对象
var engineer = { name: 'Joe Sixpack', salary: 50 };

//定义处理程序
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value);
    receiver[property] = value;
  }
};

//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60;//控制台输出：salary is changed to 60

/*模块*/
export var a11 = 1;
export var a12 = 1;
export var a13 = 1;
/*
//还可以
export {a11,a12,a13}
export {a11 as A1,a12 as A2,a13 as A3}	//取别名
export default class Demo extends React.Component {
	
}
*/
 
import * as module1 from './index.js'		//* 导出的所有  as 重命名
//a就是{a11:1,a12:1,a13:1}
/*
//1
import $ from 'jquery';

//2
import {firstName, lastName, year} from './profile';

//3
import React, {Component, PropTypes} from 'react';

//4
import * as module1 from './index.js'
*/

import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class App extends Component{
	render(){
		return(
			<div>
				<h1>欢迎学习react</h1>
			</div>
		)
	}
}

let root = document.getElementById('app');
render(<App/>,root)
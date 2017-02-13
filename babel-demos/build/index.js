'use strict';

exports.__esModule = true;
exports.a13 = exports.a12 = exports.a11 = undefined;

var _index = require('./index.js');

var module1 = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//块级作用域
(function f1() {
	var n = 5;
	if (true) {
		var _n = 10; // 只在if里生效
	}
	console.log(n); // 5
})();

//变量提升
console.log(a); // undefined
console.log(b); // 2 
var a = 1;
var b = 2;

//定义常量
var c = 1;
/*c = 2;
console.log(c);*/

//箭头函数
var d = function d(b) {
	return b + 2;
};
var d2 = function d2(b) {
	return b + 2;
};

var Template = {
	test: function test() {
		var _this = this;

		console.log(this); //Template
		$('#event').on('click', function () {
			console.log(_this); //Template 箭头函数没有this指针 所以和上层的this一致
		});
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

var Animal = function () {
	//Animal类
	function Animal(name) {
		_classCallCheck(this, Animal);

		//ES6新型构造器
		this.name = name;
	}
	//实例方法-原型上的方法


	Animal.prototype.sayName = function sayName() {
		//Animal.prototype.sayName
		console.log('My name is' + this.name);
	};

	return Animal;
}();
//类的继承


var Programmer = function (_Animal) {
	_inherits(Programmer, _Animal);

	function Programmer(name) {
		_classCallCheck(this, Programmer);

		return _possibleConstructorReturn(this, _Animal.call(this, name));
	}

	Programmer.prototype.program = function program() {
		console.log('I am comming...');
	};

	return Programmer;
}(Animal);

//对象字面量增强
/*
1.属性的简写
2.方法的简写
3.快速设置原型（继承）
*/


var a2 = 1;
var b2 = 2;

var obj = {
	a2: a2, //ES6 a2:a2的省略写法
	b2: b2,
	breathe: function breathe() {
		//同上 方法的省略写法
		console.log('b');
	},

	__proto__: Animal //设置此对象的原型为Animal，相当于继承human
};

//模板字符串
/*
//传统方式拼接html字符串片段
let html = [];
html.push('<div>'+ a +'</div>');
*/
var html = '<div>' + a + '\n\t<h2>' + b + '</h2>\n</div>';
console.log(html);

//解构
/*对象的解构*/
var res = {
	a3: 1,
	b3: 1,
	c3: 1,
	d3: 1
};
/*
var x = res.a;
var y = res.b;
...
*/
var a3 = res.a3,
    b3 = res.b3;

console.log(a3, b3);
/*数组的解构*/
var foo = 1,
    bar = 2,
    baz = 3;

console.log(foo, bar, baz);
/*字符串的解构*/
var _hello = 'hello',
    a4 = _hello[0],
    b4 = _hello[1],
    c4 = _hello[2],
    d4 = _hello[3],
    d5 = _hello[4];

console.log(a4, b4, c4, d4, d5);

//函数参数 Default Rest
/*function sayGood(name){
	var name = name||'aaa';		//容错处理
	console.log('Good'+name);
}*/
function sayGood() {
	var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'defaultValue';
	//ES6设置参数的默认值
	console.log('Good' + name);
}
sayGood(); //Good defaultValue

function restFunc(a) {
	//ES6迭代参数
	console.log(a);

	for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		rest[_key - 1] = arguments[_key];
	}

	console.log(rest);
};
restFunc(1); //1 []
restFunc(1, 2, 3, 5); //1 [2,3,5]

var people = ['zf', 'john', 'mike'];
function sayHello(people1, people2, people3) {
	console.log('Hello' + people1 + ',' + people2 + ',' + people3);
}
sayHello.apply(undefined, people);

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
	set: function set(receiver, property, value) {
		console.log(property, 'is changed to', value);
		receiver[property] = value;
	}
};

//创建代理以进行侦听
engineer = Proxy(engineer, interceptor);
//做一些改动来触发代理
engineer.salary = 60; //控制台输出：salary is changed to 60

/*模块*/
var a11 = exports.a11 = 1;
var a12 = exports.a12 = 1;
//* 导出的所有  as 重命名
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
var a13 = exports.a13 = 1;
/*
//还可以
export {a11,a12,a13}
export {a11 as A1,a12 as A2,a13 as A3}	//取别名
export default class Demo extends React.Component {
	
}
*/
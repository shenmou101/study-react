import 'babel-polyfill';

function f1(){
	let n = 4;
	if(true){
		let n = 10;
	}
	console.log(n);
}

const PI = 3.1415;
console.log(PI);

PI = 3;
console.log(PI);
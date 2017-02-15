import React, {Component} from 'react';
import {render} from 'react-dom';

import * as Comp from './component';

console.log(Comp)
class App extends Component{
	render(){
		return(
			<div>
				<h1>欢迎Jack学习react</h1>
			</div>
		)
	}
}

let root = document.getElementById('app');
render(<App/>,root)
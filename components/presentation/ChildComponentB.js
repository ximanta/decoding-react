import React, { Component } from 'react';
import GrandChildComponentB from './GrandChildComponentB';

export default class ChildComponentB extends Component{
	
	render(){
             return(
             <div>
                <h2>Hello from Child Component B.</h2>
                <GrandChildComponentB />
             </div>
             );
	}
}
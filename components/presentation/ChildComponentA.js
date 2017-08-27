import React, { Component } from 'react';
import GrandChildComponentA from './GrandChildComponentA';

export default class ChildComponentA extends Component{
	
	render(){
             return(
             <div>
                <h2>Hello from Child Component A.</h2>
                <GrandChildComponentA />
             </div>
             );
	}
}
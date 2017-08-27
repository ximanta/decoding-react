import React from 'react';
import ChildComponentA from '../presentation/ChildComponentA';
import ChildComponentB from '../presentation/ChildComponentB';


class App extends React.Component{
	
	render(){
	return (
	      <div>
	            <h1>Hello from App component!</h1>
	            <ChildComponentA />
	            <ChildComponentB />
	      </div>);
	}
}
export default App;
import React from 'react';
import ReactDom from 'react-dom';
import App from './container/App';

//Commented previous code 
// const element = <div>
//                     <h1>Hello from React element!
//                     </h1><h1>Hello again!</h1>
//                  </div>

ReactDom.render(
 <App /> , document.getElementById('root')
);

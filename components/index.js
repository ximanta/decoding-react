import React from 'react';
import ReactDom from 'react-dom';

const element = <div>
                    <h1>Hello from React element!
                    </h1><h1>Hello again!</h1>
                 </div>

ReactDom.render(
 element , document.getElementById('root')
);

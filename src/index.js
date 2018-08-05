import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/styles/body.css'
import App from './Components/App.jsx';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

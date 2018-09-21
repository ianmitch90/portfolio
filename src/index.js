import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/styles/body.css'
import App from './Components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css'
import '../src/Assets/styles/body.css'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

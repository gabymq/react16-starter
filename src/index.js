import './styles/';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './services/registerWorker';
import App from './containers/app'

const domNode = document.getElementById('root');
ReactDOM.render( <App/> , domNode );
registerServiceWorker();

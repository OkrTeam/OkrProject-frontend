import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "./Auth/Store/store";
import 'bootstrap/dist/css/bootstrap.css';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));
  // <BrowserRouter basename={baseUrl}>
  //   <App />
  // </BrowserRouter>,
  // rootElement);

registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/style.css';
import {createBrowserHistory} from 'history'
import App from './app/layout/App';
import 'react-toastify/dist/ReactToastify.min.css'
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter,  Router } from 'react-router-dom';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
  <App />
  </Router>,
  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

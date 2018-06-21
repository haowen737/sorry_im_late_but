import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './routes/home'
import FancyPick from './routes/fancyPick'

const history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <React.Fragment>
      <Route exact path="/"component={App} />
      <Route exact path="/fancy-pick" component={FancyPick} />
    </React.Fragment>
  </Router>
), document.getElementById('root'));
registerServiceWorker();

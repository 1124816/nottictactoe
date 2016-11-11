import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import Punnett from './components/punnett.js';
import Pedigree from './components/pedigree.js';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/punnett" component={Punnett}/>
    <Route path="/pedigree" component={Pedigree}/>
  </Router>,
  document.getElementById('root')
);

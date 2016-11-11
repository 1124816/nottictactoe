import React from 'react';
import './App.css';
import { Link } from 'react-router'

var App = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bio & Moose Test</h2>
        </div>
        <table className="table">
        <tr><td><img src="hoose.jpg" alt="Not sentient"/></td></tr>
        <tr><td><Link className="links" to="/pedigree"><button className="button"><b>Pedigree Test</b></button></Link></td></tr>
        <tr><td><Link className="links" to="/punnett"><button className="button"><b>Punnett Square Test</b></button></Link></td></tr>
        </table>
      </div>
    );
  }

});

export default App;

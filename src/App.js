import React from 'react';
import './App.css';
import { Link } from 'react-router'

var App = React.createClass({
  getInitialState() {
    return{ place: 0, full: [["LOlz", ["B","B","B","BB","BB","b","Bb","Bb"]],["happy", ["B","B","B","BB","BB","b","Bb","Bb"]],["all the things", ["B","B","B","BB","BB","b","Bb","Bb"]]] };
  },

  handleAnswers: function(event) {
    console.log(event);
    this.setState({place: this.state.place + 1})
    return(0);
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bio Test</h2>
        </div>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/punnett">Punnett Square Test</Link></li>
      </div>
    );
  }

});

export default App;

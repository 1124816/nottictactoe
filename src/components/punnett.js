import React from 'react';
import { Link } from 'react-router'
import './punnett.css';
import Question from './punnett_question.js';
import Score from './score.js';
import Correct from './correct.js';

export default React.createClass({
  getInitialState() {
    return{ place: 0, done: false, correct: 0, answers: 0, correctfull: [2,1, 2, 0, 0], full: [
      ["A Daddy moose has large antlers (AA) and the Mother moose has small antlers (aa). What is the chance that the baby moose will have large antlers?", ["A","A","a","Aa","Aa","a","Aa","Aa"], ["25%", "75%", "100%"]],
      ["A Daddy moose has dark brown fur (FF) and a mother moose has light brown fur (Ff). Can a baby moose have white fur (ff)? ", ["F","F","F","FF","FF","f","Ff","Ff"], ["Yes", "No"]],
      ["In some deer the gene for fur color can be codominant. If a male white tail deer (WW) and a female red deer (RR) mate; what chance is there to have a red white tail deer (WR)?", ["W","W","R","WR","WR","R","WR","WR"], ["25%", "50%", "100%"]],
      ["Eurasian Elk can have variants of white fur (WW), grey fur (GG), and brown fur (BB). If one elk has white and brown fur (WB) and another has pure brown fur (BB) what is one fur type each of their parents could have had?", false, ["Mother:WB Father:BB", "Mother:WW Father:BB", "Mother:WG Father:BG"]],
      ["Chronic wasting Disease, also known as CWD, is a disease that causes degeneration in the brains of moose, deer, and elk. If a normal male moose (X^N, Y) male moose mates with a female carrier of CWD (X^C, X^C) what are the chances of having a normal son?", ["X^C","X^C","X^N","X^C X^N","X^C X^N","Y","X^C Y","X^C Y"], ["0%", "50%", "100%"]],
    ] };
  },

  handleAnswers: function(event) {
    var state = 0;
    if(this.state.correct===0) {
      state = parseInt(event.currentTarget.value, 10) === this.state.correctfull[this.state.place] ? 1 : 2;
      this.setState({correct: state});
      if(state === 1) {
        this.setState({answers: this.state.answers + 1});
      }
      console.log(event);
    }else if (this.state.place < this.state.full.length-1) {
      this.setState({place: this.state.place + 1, correct: 0})
      this.setState({correct: 0});
    }else {
      this.setState({done: true})
      this.setState({correct: 0});
    };
  },

  renderQuestion: function() {
    return (
      <div>
      <Score place={this.state.place} answers={this.state.answers}/>
      <Correct correct={this.state.correct}/>
      <Question full={this.state.full[this.state.place]} correct={this.state.correct} onclicks={this.handleAnswers}/>
      </div>
    );
  },

  renderResults: function() {
    return (
      <h2>You got {this.state.answers}/{this.state.place+1}</h2>
    );
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/" className="links">
          <h2>Bio Test</h2>
          </Link>
        </div>
        {this.state.done ? this.renderResults() : this.renderQuestion()}
      </div>
    );
  }

});

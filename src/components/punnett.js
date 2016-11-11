import React from 'react';
import { Link } from 'react-router'
import './punnett.css';
import Question from './punnett_question.js';
import Score from './score.js';
import Correct from './correct.js';

export default React.createClass({
  getInitialState() {
    return{ place: 0, done: false, correct: 0, answers: 0, correctfull: [2,1, 2, 0, 1], full: [
      ["A Daddy moose has large antlers (AA) and the Mother moose has small antlers (aa). What is the chance that the baby moose will have large antlers?", ["A","A","a","Aa","Aa","a","Aa","Aa"], ["25%", "75%", "100%"], "100% chance, because small antlers is a recessive trait (a) it doesn't appear when paired with a dominant trait (A)."],
      ["A Daddy moose has dark brown fur (FF) and a mother moose has light brown fur (Ff). Can a baby moose have white fur (ff)? ", ["F","F","F","FF","FF","f","Ff","Ff"], ["Yes", "No"], "0% chance. There is only one recessive allele (f) so it will only pair with dominant alleles (F). The moose will have a 50% chance to have dark brown fur and a 50% chance to have light brown fur."],
      ["In some deer the gene for fur color can be codominant. If a male white tail deer (WW) and a female red deer (RR) mate; what chance is there to have a red white tail deer (WR)?", ["W","W","R","WR","WR","R","WR","WR"], ["25%", "50%", "100%"], "There is a 100% chance that the deer will be a red white tail. Every combination of the WW gene with the RR gene produces a WR outcome."],
      ["Eurasian Elk can have variants of white fur (WW), grey fur (GG), and brown fur (BB). If one elk has white and brown fur (WB) and another has pure brown fur (BB) what is one fur type each of their parents could have had?", false, ["Mother:WB Father:BB", "Mother:WW Father:BB", "Mother:WG Father:BG"], "The mother had white and brown fur and the father had pure brown fur. If one parent had pure white fur (WW) and the other had pure brown (BB) both children would have white and brown fur. There are no gray fur children so neither parent had grey fur."],
      ["Chronic wasting Disease, also known as CWD, is a disease that causes degeneration in the brains of moose, deer, and elk. If a normal male moose (X^N, Y) male moose mates with a female carrier of CWD (X^C, X^N) what are the chances of having a normal son?", ["X^C","X^N","X^N","X^C X^N","X^N X^N","Y","X^C Y","X^N Y"], ["0%", "50%", "100%"], "There is a 50% chance of a normal son. Because the mother is a carrier (X^C, X^N) she only passes down two affected alleles (X^C) giving the children a 50% chance of inheriting Chronic Wasting Disease."],
    ] };
    //The page is populated with the contents of the 'full' array
    //When a button is pressed it is compared to the array correctfull, which contains the correct answer, and a bool is stored in the answers array
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
          <h2>Bio & Moose Test</h2>
          </Link>
        </div>
        {this.state.done ? this.renderResults() : this.renderQuestion()}
      </div>
    );
  }

});

import React from 'react';
import { Link } from 'react-router'
import './pedigree.css';
import Question from './pedigree_question.js';
import Score from './score.js';
import Correct from './correct.js';

export default React.createClass({
  getInitialState() {
    return{ place: 0, done: false, correct: 0, answers: 0, correctfull: [1, 0, 1, 0], full: [
      ["Could Moose 1 have been DD?", false, ["Yes", "No"], "No, because two of her children received a 'd' from both of their parents."],
      ["What genotype is Moose 3?", false, ["DD", "Dd", "dd"], "'DD'. Moose 3 is 'DD', because he is not shaded in."],
      ["What genotype is Moose 2?", false, ["DD", "Dd", "dd"], "'Dd'. Moose 3 was DD, therefore he received a 'D' from both of his parents. That means that Moose 2 could not have been 'dd'. Since Moose 2 is only half shaded in, she is a 'Dd'."],
      ["If Moose 3 and his mate had a calf, what is the probability of it being a 'DD'.", false, ["0%", "50%", "75%"], "0%. For the calf to be 'DD', it would have had to get a 'D' from both parents."]
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
          <h2>Bio Test</h2>
          </Link>
        </div>
        {this.state.done ? this.renderResults() : this.renderQuestion()}
      </div>
    );
  }

});

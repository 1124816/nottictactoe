import React from 'react';

export default React.createClass({
  render() {
    if( this.props.correct===0 ) {
      return (
        <div></div>
      );
    } else if( this.props.correct===1 ) {
      return (
        <p className="correct"><b>Correct</b></p>
      );
    }else {
      return (
        <p className="incorrect"><b>Incorrect</b></p>
      );
    }
  }
});

import React from 'react';

export default React.createClass({
  render() {
    return(
      <p className="score">{this.props.answers}/{this.props.place+1}</p>
    );
  }
});

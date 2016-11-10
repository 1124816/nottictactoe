import React from 'react';

export default React.createClass({
  render() {
    return(
      <p>{this.props.answers}/{this.props.place+1}</p>
    );
  }
});

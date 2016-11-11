import React from 'react';

export default React.createClass({
  render() {
    var rows = [];
    if(this.props.correct === 0) {
      for(var i=0; i<this.props.full[2].length; i++) {
        rows.push(<tr><td><button className="questions" value={i} onClick={this.props.onclicks}>{this.props.full[2][i]}</button></td></tr>);
      };
    }else {
      rows.push(<tr><td><button className="questions" value="0" onClick={this.props.onclicks}>Next</button></td></tr>);
    };
    return(
      <div>
      <p>{this.props.correct===0 ? this.props.full[0] : this.props.full[3]}</p>
      <img src="p-chart.PNG" alt="not_Moose"/>
      <table>
      {rows}
      </table>
      </div>
    );
  }
});

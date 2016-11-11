import React from 'react';

export default React.createClass({
  render() {
    if(this.props.full[1]&&this.props.correct===0) {
      return(
        <table>
            <tr>
                <td className="squareb">a</td>
                <td className="square">{this.props.full[1][0]}</td>
                <td className="square">{this.props.full[1][1]}</td>
            </tr>
            <tr>
                <td className="square">{this.props.full[1][2]}</td>
                <td className="square">{this.props.full[1][3]}</td>
                <td className="square">{this.props.full[1][4]}</td>
            </tr>
            <tr>
                <td className="square">{this.props.full[1][5]}</td>
                <td className="square">{this.props.full[1][6]}</td>
                <td className="square">{this.props.full[1][7]}</td>
            </tr>
        </table>
      );
    } else if(this.props.correct===0){
      return(
        <div>
        <img src="meese.jpeg" alt="Not sentient"/>
        <img src="moose.jpeg" alt="sentient"/>
        <img src="meerse.jpeg" alt="Not sentient"/>
        </div>
      );
    } else {
        return(
          <div></div>
        );
    };
  }
});

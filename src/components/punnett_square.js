import React from 'react';

export default React.createClass({
  render() {
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
  }
});

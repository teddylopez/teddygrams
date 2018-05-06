import React from 'react';
import { Link } from 'react-router';
import Favicon from 'react-favicon';

const Main = React.createClass({
  render() {
    return(
      <div>
        <Favicon url="./client/assets/favicon.png" />
        <h1>
          <Link to="/">teddygrams</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
});

export default Main;

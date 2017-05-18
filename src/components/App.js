import React from 'react';
import { Component } from 'react';

export default class App extends Component {
	componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <div>
	<h2>Test</h2>
        {this.props.children}
      </div>
    );
  }
}

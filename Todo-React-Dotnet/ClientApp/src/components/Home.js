import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Client side is react</h2>
        <h2>Backend is Dotnet</h2>
      </div>
    );
  }
}

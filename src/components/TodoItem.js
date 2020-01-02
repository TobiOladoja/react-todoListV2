import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <h1>Hello from the item</h1>
      </div>
    );
  }
}

// Going to import TodoItem to TodoList but import TodoList and TodoInput to app.js
// because they are both visually presented on the app.js page.

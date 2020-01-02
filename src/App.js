import React, { Component } from 'react';
import TodoList from './components/TodoList';
import ToDoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello From App.js</h1>
        <ToDoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;

// App component hold state and method
// TodoInput component Hold form and item > importing to app.js
// TodoList  component  > importing to app.js
// TodoItem component for each and every to do > importing to TodoList.js

// Going to import TodoItem to TodoList but import TodoList and TodoInput to app.js
// because they are both visually presented on the app.js page.

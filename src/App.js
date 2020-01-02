import React, { Component } from 'react';
import TodoList from './components/TodoList';
import ToDoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    // To prevent from refreshing the page.
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    console.log(newItem);

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            {/* Passed both item and handleChange to TodoInput component */}
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// App component hold state and method
// TodoInput component Hold form and item > importing to app.js. Because app js wil be rendering ToDoInput.
// TodoList  component Hold form and item > importing to app.js Because app js wil lbe rendering ToDoList.
// TodoItem component for each and every to do > importing to TodoList.js Because ToDoList will be rendering ToDoItem

//

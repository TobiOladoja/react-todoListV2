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

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };

  clearList = e => {
    this.setState({
      items: []
    });
  };

  // id param not e as you're deleting a specific item
  handleDelete = id => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItem
    });
  };

  // id param not e as you're editing a specific item on the list
  handleEdit = id => {
    const filteredItem = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    console.log(selectedItem);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id
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
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
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

import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete } = this.props;
    return (
      <ul className='list-group my-5'>
        <h3 className='text-capialize text-center'>Todo List</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
            />
          );
        })}
        <button
          type='button'
          className='btn btn-danger btn-block text-capitalize mt-5'
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}

// Map method to loop through the whole array that we're being passed {items} and as we're looping
// through eac and every one, we'll want to grab the id(unique uuid), title.

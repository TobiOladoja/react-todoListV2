import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete } = this.props;
    return (
      <li className='list list-group-item capitalize d-flex justify-content-between my-3'>
        <h6>{title}</h6>
        <div className='todo-icon'>
          <span className='mx-2 text-success'>
            <i className='fas fa-pen'></i>
          </span>
          <span className='mx-2 text-danger'>
            <i className='fas fa-trash' onClick={handleDelete}></i>
          </span>
        </div>
      </li>
    );
  }
}

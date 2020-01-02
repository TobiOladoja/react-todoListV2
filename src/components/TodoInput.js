import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props; //from App.js the state item and method/function want to use.
    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'></div>
            <input
              type='text'
              className='form-control'
              placeholder='add a todo item'
              /* from const item and handleChange, declared on top of here but passed from app.js */
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-block btn-primary mt-3'>
            Add item
          </button>
        </form>
      </div>
    );
  }
}

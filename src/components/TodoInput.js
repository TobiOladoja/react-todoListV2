import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props; //from App.js the state item and method/function want to use.
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
          <button
            type='submit'
            className={
              editItem
                ? 'btn btn-block btn-success mt-3'
                : 'btn btn-block btn-primary mt-3'
            }
          >
            {editItem ? 'Edit item' : 'Add item'}
          </button>
        </form>
      </div>
    );
  }
}

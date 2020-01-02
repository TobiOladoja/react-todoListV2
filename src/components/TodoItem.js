import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { title } = this.props;
    return (
      <li className='list list-group-item capitalize d-flex justify-content-between my-3'>
        <h6>{title}</h6>
      </li>
    );
  }
}

import React from 'react';
import './TodoItem.css';

function TodoItem(props){
  return (
    <li className="TodoItem">
      <span className={`TodoItem__state ${props.check && 'TodoItem__state--check'}`}>✔</span>
      <p className={`TodoItem__text ${props.check && 'TodoItem__text--line'}`}>{ props.text }</p>
      <span className="TodoItem__delete">x</span>
    </li>
  );
}

export default TodoItem
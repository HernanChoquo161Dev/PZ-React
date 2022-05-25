import './App.css';
import React from 'react'
import TodoCounter from './components/TodoCounter.js'
import TodoSearch from './components/TodoSearch.js'
import TodoList from './components/TodoList.js'
import TodoItem from './components/TodoItem.js'
import TodoButtonGenerator from './components/TodoButtonGenerator.js'

const todos = [
  { text:"Terminar proyecto TODO", completed : true },
  { text:"Terminar apuntes Ingles", completed : true },
  { text:"Terminar de estudiar material de AC", completed : false }
];

function App() {
  return (
    <div className="App">
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
        { 
          //No podemos usar Foreach porque no devuelve nada
          todos.map((todo, i) => ( 
            //Al iterar necesitamos enviarle un clave unica para identificar cada elemento
            <TodoItem key={ i } check={todo.completed} text={ todo.text }></TodoItem> 
          ))
        }
      </TodoList>
      <TodoButtonGenerator></TodoButtonGenerator>
    </div>
  );
}

export default App;

import { useState } from 'react'
import styles from './App.module.css'

import { AddBar } from './components/AddBar.jsx'
import { Header } from './components/Header.jsx'
import { TaskList } from './components/TaskList.jsx'
import { Todo } from './components/Todo.jsx'

import './global.css'

export default function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      isComplete: false,
      content: 'Estudar Reactjs' 
    },
    {
      id: 2,
      isComplete: false,
      content: 'Estudar Typescript'    
    }
  ]);
  
  console.log(Array.isArray(todos))
  const numberOfTodos = todos.length;

  // const handleAddTodo = 

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  return (
    <article className={styles.app}>
      <Header />
      <AddBar />
      <TaskList 
        numberOfTodos={numberOfTodos}/>
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id} 
              content={todo.content}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
          )
        })}
    </article>
  )
}

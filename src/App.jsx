import { useState } from 'react'
import styles from './App.module.css'

import { AddBar } from './components/AddBar.jsx'
import { Header } from './components/Header.jsx'
import { TaskList } from './components/TaskList.jsx'
import { Todo } from './components/Todo.jsx'
import { Footer } from './components/Footer.jsx'

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
  
  const [MsgVisibility, setMsgVisibility] = useState();

  const numberOfTodos = todos.length;

  const numberOfConcludedTodos = 0;
  
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    updatedTodos === 0 ? setMsgVisibility(true) : setMsgVisibility(false)
  };
  
  const handleCreateNewTodo = () => {
    const newId = numberOfTodos + 1;
    const newTodo = {
      id: newId,
      isComplete: false,
      content: 'Nova tarefa'
    }
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }
  
  const handleChangeStateOfTodo = (id) => {
    todo.isComplete = true;
    numberOfConcludedTodos += 1;
  }

  return (
    <article className={styles.app}>
      <Header />
      <AddBar 
        onAddTodo = {handleCreateNewTodo}
      />
      <TaskList
        numberOfTodos={numberOfTodos}
        numberOfConcludedTodos={numberOfConcludedTodos} 
        showMsg={MsgVisibility}
      />
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id} 
              content={todo.content}
              isComplete={todo.isComplete}
              onDelete={() => handleDeleteTodo(todo.id)}
              onChangeState={() => handleChangeStateOfTodo(todo.id)}
            />
          )
        })}
      <Footer />
    </article>
  )
}

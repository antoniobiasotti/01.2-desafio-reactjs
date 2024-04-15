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

  const [completedTodos, setNumberOfCompletedTodos] = useState(0);
  
  const [MsgVisibility, setMsgVisibility] = useState();
  
  const numberOfTodos = todos.length;
  
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    updatedTodos.length === 0 ? setMsgVisibility(true) : setMsgVisibility(false)
  };
  
  const handleCreateNewTodo = (content) => {
    const newId = numberOfTodos + 1;
    const newTodo = {
      id: newId,
      isComplete: false,
      content: content,
    }
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    updatedTodos.length === 0 ? setMsgVisibility(true) : setMsgVisibility(false)
  }

  console.log(todos);
  
  const handleChangeStateOfTodo = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });

    const completedTodosCount = updatedTodos.filter(todo => todo.isComplete).length;

    setNumberOfCompletedTodos(completedTodosCount);
    setTodos(updatedTodos);
  };

  return (
    <article className={styles.app}>
      <Header />
      <AddBar 
        onAddTodo = {handleCreateNewTodo}
      />
      <TaskList
        numberOfTodos={numberOfTodos}
        numberOfConcludedTodos={completedTodos} 
        showMsg={MsgVisibility}
      />
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id} 
              content={todo.content}
              onDelete={() => handleDeleteTodo(todo.id)}
              onChangeState={() => handleChangeStateOfTodo(todo.id)}
            />
          )
        })}
      <Footer />
    </article>
  )
}

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
  
  const [newTodoContent, setNewTodoContent] = useState('');

  const numberOfTodos = todos.length;
  // console.log('Teste:' + numberOfTodos !== 0);

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    updatedTodos === 0 ? setMsgVisibility(true) : setMsgVisibility(false)
  };
  
  const handleCreateNewTodo = () => {
    const updatedTodos = todos.push()
    setTodos(updatedTodos);
    setNewTodoContent('');
  }

  return (
    <article className={styles.app}>
      <Header />
      <AddBar 
        addTodo = {() => handleCreateNewTodo()}
      />
      <TaskList
        numberOfTodos={numberOfTodos} 
        showMsg={MsgVisibility}
      />
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id} 
              content={todo.content}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
          )
        })}
      <Footer />
    </article>
  )
}

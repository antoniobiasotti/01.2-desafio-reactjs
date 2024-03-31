import styles from './App.module.css'

import { AddBar } from './components/AddBar.jsx'
import { Header } from './components/Header.jsx'
import { TaskList } from './components/TaskList.jsx'
import { Todo } from './components/Todo.jsx'

import './global.css'

const todos = [
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
];

export default function App() {

  // const handleAddTodo = 

  // const handleDeleteTodo = 
  
  return (
    <article className={styles.app}>
      <Header />
      <AddBar />
      <TaskList />
        {todos.map(todo => {
          return (
            <Todo
              key={todo.id} 
              content={todo.content}
            />
          )
        })}
    </article>
  )
}

import * as Icon from "@phosphor-icons/react";
import styles from './AddBar.module.css';
import { useState } from "react";

export function AddBar({ onAddTodo }) {
     
     const [todoContent, setTodoContent] = useState('');

     const handleButtonClick = (event) => {
          event.preventDefault();
          onAddTodo(todoContent)
          setTodoContent('');
     };

     return(
          <form className={styles.addbar}>
               <textarea
                    name="todo"
                    placeholder="Adicione uma nova tarefa"
                    required
                    onChange={(e) => setTodoContent(e.target.value)}
                    value={todoContent}
               />
               <button onClick={handleButtonClick}>
                    Criar 
                    <Icon.PlusCircle size={16} weight="bold"/>
               </button>
          </form>
     )
}
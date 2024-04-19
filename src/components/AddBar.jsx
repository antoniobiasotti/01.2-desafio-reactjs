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
          <form className={styles.addbar} onSubmit={handleButtonClick}>
               <input
                    name="todo"
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => setTodoContent(e.target.value)}
                    value={todoContent}
                    required
               />
               <button type="submit">
                    Criar 
                    <Icon.PlusCircle size={16} weight="bold"/>
               </button>
          </form>
     )
}
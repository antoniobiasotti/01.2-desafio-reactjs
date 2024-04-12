import * as Icon from "@phosphor-icons/react";
import styles from './AddBar.module.css';

export function AddBar({ onAddTodo }) {
     
     const handleButtonClick = (event) => {
          event.preventDefault();
          onAddTodo();
     };

     return(
          <form className={styles.addbar}>
               <textarea
                    name="todo"
                    placeholder='Adicione uma nova tarefa'
                    required
               />
               <button onClick={handleButtonClick}>
                    Criar 
                    <Icon.PlusCircle size={16} />
               </button>
          </form>
     )
}
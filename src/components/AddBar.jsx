import * as Icon from "@phosphor-icons/react";
import styles from './AddBar.module.css';

export function AddBar({ onAddTodo }) {

     return(
          <form className={styles.addbar}>
               <textarea
                    name="todo"
                    placeholder='Adicione uma nova tarefa'
                    required
               />
               <button onClick={onAddTodo}>
                    Criar 
                    <Icon.PlusCircle size={16} />
               </button>
          </form>
     )
}
import * as Icon from "@phosphor-icons/react";
import styles from './AddBar.module.css';

export function AddBar({ addTodo }) {

     return(
          <form onSubmit={addTodo} className={styles.addbar}>
               <textarea
                    name="todo"
                    value={newTodoContent}
                    placeholder='Adicione uma nova tarefa'
                    required
               />
               <button type="submit">
                    Criar 
                    <Icon.PlusCircle size={16} />
               </button>
          </form>
     )
}
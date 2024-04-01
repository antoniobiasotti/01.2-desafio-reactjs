import * as Icon from "@phosphor-icons/react";
import styles from './AddBar.module.css';

export function AddBar(todos) {

     function handleCreateNewTodo(event) {
          event.preventDefault()

          todos.push(3);

          console.log('oi');
     }

     return(
          <form onSubmit={handleCreateNewTodo} className={styles.addbar}>
               <textarea
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
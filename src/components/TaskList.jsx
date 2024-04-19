import * as Icon from "@phosphor-icons/react";
import styles from './TaskList.module.css';

export function TaskList({ showMsg, numberOfTodos, numberOfConcludedTodos }) {

     console.log(showMsg);
     console.log(numberOfTodos);

     return(
          <article>
               <header>
                    <div className={styles.tasklist}>
                         <h4 className={styles.tarefasCriadas}>Tarefas criadas<button>{numberOfTodos}</button></h4>
                         <h4 className={styles.tarefasConcluidas}>Concluídas<button>{numberOfConcludedTodos} de {numberOfTodos}</button></h4>
                    </div>
               </header>
               <div className={styles.content}>
                    {showMsg && 
                    <div>
                         <Icon.ClipboardText size={32} />
                         <h4>Você ainda não tem tarefas cadastradas</h4>
                         <span>Crie tarefas e organize seus itens a fazer</span> 
                    </div>
                    }    
               </div> 
          </article>
     )
}
import styles from './Todo.module.css';

import * as Icon from "@phosphor-icons/react";

export function Todo({ content, onDelete }){
    
     // console.log(content);

     return(
          <main>
               <div className={styles.todo}>
                    <div>
                         <input type="radio"></input>
                         <label>{content}</label>
                    </div>
                    <button onClick={onDelete} title="Deletar todo">
                         <Icon.Trash size={24} />
                    </button>
               </div>
          </main>
     )
}
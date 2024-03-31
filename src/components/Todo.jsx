import styles from './Todo.module.css';

import * as Icon from "@phosphor-icons/react";

export function Todo(props){

     
     // console.log(content);

     return(
          <main>
               <div className={styles.todo}>
                    <input type="radio"></input>
                    <label>{props.content}</label>
                    <button title="Deletar todo">
                         <Icon.Trash size={24} />
                    </button>
               </div>
          </main>
     )
}
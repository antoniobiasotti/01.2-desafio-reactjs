import styles from './Todo.module.css';

import * as Icon from "@phosphor-icons/react";

export function Todo({ key, content, onDelete, onChangeState }){
    
     const handlerChangeState = () => {
          onChangeState(key);
     };

     return (
          <main>
               <div className={styles.todo}>
                    <div>
                         <input type="checkbox" onClick={handlerChangeState}>
                         </input>
                         <label>{content}</label>
                    </div>
                    <button onClick={onDelete} title="Deletar todo">
                         <Icon.Trash size={24} color="#808080" />
                    </button>
               </div>
          </main>
     )
}
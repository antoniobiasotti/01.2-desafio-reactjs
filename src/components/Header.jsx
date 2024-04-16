import styles from './Header.module.css'
import * as Icon from "@phosphor-icons/react";

export function Header() {
     return (
          <div>
               <header className={styles.header}>
                    <Icon.Rocket size={46} color="#74F3FC" weight="thin" />
                    to
                    <p style={{ color: 'var(--purple'}}>do</p>
               </header>
          </div>
     )
}
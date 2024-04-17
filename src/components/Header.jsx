import styles from './Header.module.css'
import todoLogo from '../assets/rocket.png';

export function Header() {
     return (
          <div>
               <header className={styles.header}>
                    <img src={todoLogo} alt='logo' width={28}/>
                    to
                    <p style={{ color: 'var(--purple'}}>do</p>
               </header>
          </div>
     )
}
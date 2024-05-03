import styles from './Header.module.css'
import todoLogo from '../assets/rocket.svg';

export function Header() {
     return (
          <div>
               <header className={styles.header}>
                    <img src="/logo.svg" alt="logo da aplicação" />
               </header>
          </div>
     )
}
import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer className={styles.Footer}>
            <p>Made by <button><a href='https://github.com/antoniobiasotti' target='_blank'>Antonio</a></button></p>
        </footer>
    )
}
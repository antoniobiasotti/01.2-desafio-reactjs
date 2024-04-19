import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer className={styles.Footer}>
            <p>Made with <a href="https://react.dev" target="_blank">React</a> by <a href="https://github.com/antoniobiasotti" target="_blank">Antonio</a></p>
        </footer>
    )
}
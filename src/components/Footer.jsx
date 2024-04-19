import styles from './Footer.module.css'

export function Footer() {
    return(
        <footer className={styles.Footer}>
            <p>Made with React by <a href='https://github.com/antoniobiasotti' target='_blank'>Antonio</a></p>
        </footer>
    )
}
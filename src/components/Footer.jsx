import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <nav className={styles.navigation}>
                    <ul className={styles.navList}>
                        <li><a className={styles.navLink} href="#">About Us</a></li>
                        <li><a className={styles.navLink} href="#">Contact</a></li>
                    </ul>
                    <ul className={styles.socialList}>
                        <li><a className={styles.navLink} href="#">
                            <img src="./public/images/twitter.svg" alt="" />Twitter</a></li>
                        <li><a className={styles.navLink} href="#">
                            <img src="./public/images/facebook.svg" alt="" />Facebook</a></li>
                    </ul>
                </nav>
            </footer>

        </>
    )
}

export default Footer;
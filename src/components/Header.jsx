import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

    return (
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div className={styles.logoContainer}>
                        <Link to="/">
                        <img src="/images/logo.png" alt="Soundwave" className={styles.logoImg} />
                        <span className={styles.logoText}>Soundwave</span>
                        </Link>
                    </div>
                    <ul className={styles.navList}>
                        <li><Link to="/Discover" className={styles.navLink}>Discover</Link></li>
                         <li><Link to="/Join" className={styles.navLink}>Join</Link></li>
                    </ul>
                </nav>
            </header>
    );
};

export default Header;
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.nav} >
                <div className={styles.logo}>
                    <Link to="/" aria-label="Home">
                        <img src="/images/logo.png" alt="Soundwave" className={styles.logoImg} />
                        <span className={styles.logoText}>Soundwave</span>
                    </Link>
                </div>
                <ul className={styles.navLinks}>
                    <li><Link to="/Discover"  className= {styles.navList}>Discover</Link></li>
                    <li ><Link to="/Join" className= {styles.navList} >Join</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
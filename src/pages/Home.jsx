import styles from './Home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className={styles.container}>
            <div className={styles.circleOne}></div>
            <div className={styles.circleTwo}></div>
            <div className={styles.circleThree}></div>

            <div className={styles.imageWrapper}>
                <img src="./images/landing-page-girl.png" alt="" />
            </div>
            <div className={styles.text}>
                <h1>Feel The Music</h1>
                <h2>stream over 20 thousand songs with one click</h2>
                <Link to="/join" className={styles.btn}>Join Now</Link>
            </div>
        </main>
    )
}

export default Home;
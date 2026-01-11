import styles from './Join.module.css';
import Footer from '../components/Footer';

const Join = () => {
  return (
    <>
    <div className={styles.joinPage}>
      <main className={styles.joinContainer}>
        
        <div className={styles.circleOne}></div>
        <div className={styles.circleTwo}></div>

        <div className={styles.content}>
          <div className={styles.leftSection}>
            <h1 className={styles.title}>
              Join the <span className={styles.pinkText}>fun.</span>
            </h1>
          </div>

          <div className={styles.rightSection}>
            <form className={styles.joinForm}>
              <div className={styles.inputGroup}>
                <label>Name:</label>
                <input type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email:</label>
                <input type="email" />
              </div>
              <div className={styles.inputGroup}>
                <label>Password:</label>
                <input type="password" />
              </div>
              <button type="submit" className={styles.joinBtn}>Join Now</button>
            </form>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Join;
import styles from './Discover.module.css';

const Discover = () => {
  return (
    <main className={styles.discoverContainer}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h1>Discover new music</h1>
          
          <div className={styles.iconGrid}>
            <div className={styles.iconItem}>
              <img src="./images/microphone.svg" alt="Charts" />
              <span>Charts</span>
            </div>
            <div className={styles.iconItem}>
              <img src="./images/albums.svg" alt="Albums" />
              <span>Albums</span>
            </div>
            <div className={styles.iconItem}>
              <img src="./images/more.svg" alt="More" />
              <span>More</span>
            </div>
          </div>

          <p>By joining you can benefit by listening to the latest albums released.</p>
        </div>

        <div className={styles.rightSection}>
          <img src="./images/covers.jpg" alt="Covers Collage" className={styles.coversImg} />
        </div>
      </div>
     
    </main>
    
    );
};

export default Discover;
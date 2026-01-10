import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import styles from './App.module.css';
import Discover from './pages/Discover';
import Join from './pages/Join';

function App() {
  return (
    <Router>
      <div className={styles.appContainer}>
      <Header />
      <main className={styles.mainContent}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      </main>
      </div>
    </Router>
  );
}
export default App;
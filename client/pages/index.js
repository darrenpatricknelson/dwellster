// Imports

// components 
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';

// styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header page="Home" />
      <div className={styles.container}>
        <Navbar />
      </div>
    </div>
  );
}

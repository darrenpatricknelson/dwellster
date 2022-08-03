// Imports

// components 
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import BlogContainer from '../components/BlogContainer.js';

// styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header page="Home" />
      <div className={styles.container_Body}>
        <Navbar />
        <BlogContainer />
      </div>
    </div>
  );
}

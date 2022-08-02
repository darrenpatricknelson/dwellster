// Imports

// components 
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Container from '../components/Container.js';

// styles
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header page="Home" />
      <div className={styles.container}>
        <Navbar />
        <Container />
      </div>
    </div>
  );
}

// this component will be used to create a layout for each page that is behind the authentication wall

// imports
import Header from './Header.js';
import Navbar from './Navbar.js';

// styles
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.container_Body}>
                <Navbar />
                <div className={styles.blog_container}>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
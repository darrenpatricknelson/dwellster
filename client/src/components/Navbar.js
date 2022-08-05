// this component will be used to create a Navbar 

// styles
import buttonStyles from '../styles/Buttons.module.css';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {


    return (
        <div className={styles.navbar}>
            <h1>hello</h1>
            <div className={styles.buttons}>
                <div className={styles.community_button}>
                    <a href="/home/community">
                        <div className={`${styles.nav_links} ${buttonStyles.button} ${buttonStyles.caution}`}>
                            Community
                        </div>
                    </a>
                </div>
                <div className={styles.join_button}>
                    <a href="/home/join">
                        <div className={`${styles.nav_links} ${buttonStyles.button} ${buttonStyles.interaction}`}>
                            Join a community
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;;
// this component will be used to create a Navbar 

// Imports 
import { useUserContext } from '../hooks/useUserContext.js';

// styles
import buttonStyles from '../styles/Buttons.module.css';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const { user } = useUserContext();

    return (
        <div className={styles.navbar}>

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
                            {user.isAdmin ? 'Create a community' : 'Join a community'}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;;
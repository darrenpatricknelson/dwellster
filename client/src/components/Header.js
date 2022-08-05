// imports
import { Helmet } from "react-helmet";
import { useUserContext } from '../hooks/useUserContext.js';

// components
import { Warning } from './Buttons.js';

// styles
import styles from '../styles/Header.module.css';

const Header = ({ page }) => {
    const { user } = useUserContext();

    // function deals with a user logging out
    const handleLogout = () => {
        sessionStorage.clear();
    };


    return (
        <>
            {/* A header component to display page names above the URL */}
            <Helmet>
                <title>Dwellster | {page}</title>
            </Helmet>

            {/* The header bar */}
            <div className={styles.header}>
                <h1 className={styles.header_heading}>Dwellster - come Dwell with me</h1>
                <div className={styles.header_info}>
                    <div className={styles.header_admin}>
                        <h3>(Blogger's) board</h3>
                    </div>
                    <div className={styles.header_user}>
                        <h3>Welcome {`${user.name} ${user.surname}`}</h3>
                        <div className={styles.button}>
                            <a href="/">
                                <Warning onClick={handleLogout} text='Logout' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
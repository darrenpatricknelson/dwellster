// imports
import Head from 'next/head';

// components
import { Warning } from './Buttons.js';

// styles
import styles from '../styles/Header.module.css';

const Header = ({ page }) => {
    return (
        <>
            {/* A header component to display page names above the URL */}
            <Head>
                <title>Dwellster | {page}</title>
            </Head>

            {/* The header bar */}
            <div className={styles.header}>
                <h1 className={styles.header_heading}>Dwellster - come Dwell with me</h1>
                <div className={styles.header_info}>
                    <div className={styles.header_admin}>
                        <h3>(Blogger's) board</h3>
                    </div>
                    <div className={styles.header_user}>
                        <h3>Welcome (user)</h3>
                        <Warning text='Logout' />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
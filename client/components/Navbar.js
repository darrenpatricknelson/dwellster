// this component will be used to create a Navbar 

// imports
import Link from 'next/link';

// components
import { Caution, Interaction } from './Buttons';

// styles
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>hello</h1>
            <div className={styles.buttons}>
                <div className={styles.community_button}>
                    <Link href="/community">
                        <a>
                            <Caution text='Community' />
                        </a>
                    </Link>
                </div>
                <div className={styles.join_button}>
                    <Link href="/join">
                        <a>
                            <Interaction text='Join a community' />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
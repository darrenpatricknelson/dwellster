// Imports

// components
import { Primary } from '../components/Buttons';

// styles 
import buttonStyles from '../styles/Buttons.module.css';
import styles from '../styles/Join.module.css';

export default function Join() {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submit');
    };
    return (
        <>
            <div className={styles.container}>
                <h1>Join a new community</h1>
                <div className={styles.form}>
                    <form>
                        <input type="text" placeholder="Enter the community key provided by your blogger..." />
                        <div className={styles.button}>

                            {/* <button onClick={handleSubmit} className={`${buttonStyles.button} ${buttonStyles.primary}`}>
                                Join
                            </button> */}
                            <Primary onClick={handleSubmit} text={`Submit`} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

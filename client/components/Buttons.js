// This component will be used to created and export several types of buttons

// styles
import styles from '../styles/Buttons.module.css';

// Warning button
export const Primary = ({ text }) => {
    return (
        <button className={styles.primary}>{text}</button>
    );
};


// Warning button
export const Warning = ({ text }) => {
    return (
        <button className={styles.warning}>{text}</button>
    );
};
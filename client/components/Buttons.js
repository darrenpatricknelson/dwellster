// This component will be used to created and export several types of buttons

// styles
import styles from '../styles/Buttons.module.css';

// Warning button
export const Primary = ({ text }) => {
    return (
        <button className={`${styles.button} ${styles.primary}`}>{text}</button>
    );
};

// Interaction buttons (orange, baby blue button)
export const Interaction = ({ text }) => {
    return (
        <button className={`${styles.button} ${styles.interaction}`}>
            {text}
        </button>
    );
};

// caution button (orange, neither good or bad)
export const Caution = ({ text }) => {
    return (
        <button className={`${styles.button} ${styles.caution}`}>
            {text}
        </button>
    );
};


// Warning button
export const Warning = ({ text }) => {
    return (
        <button className={`${styles.button} ${styles.warning}`}>{text}</button>
    );
};
// This component will be used to created and export several types of buttons

// styles
import styles from '../styles/Buttons.module.css';

// Warning button
export const Primary = ({ text, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${styles.primary}`}>{text}</button>
    );
};

// Interaction buttons (capri blue inner with dodger blue border)
export const Interaction = ({ text, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${styles.interaction}`}>
            {text}
        </button>
    );
};

// caution button (paradise pink inner with orange pantone border)
export const Caution = ({ text, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${styles.caution}`}>
            {text}
        </button>
    );
};


// Warning button
export const Warning = ({ text, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${styles.warning}`}>{text}</button>
    );
};

// Warning button
export const Inactive = ({ text, ...props }) => {
    return (
        <button {...props} className={`${styles.button} ${styles.inactive}`}>{text}</button>
    );
};


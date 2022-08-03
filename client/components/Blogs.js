// This component will house every blog state
// There are 3 blog states
// CARD (a summary), BLOG (the full blog) and CLOUD (a state when adding a new blog)

// styles
import styles from '../styles/Blogs.module.css';
import { Warning } from './Buttons.js';


// Blog Card
export const Card = ({ isAdmin }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>(Blog title)</h3>
                {isAdmin && <Warning text='Delete' />}
            </div>
            <div className={styles.body}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque suscipit illo reiciendis quo nemo officiis unde facere totam sed, iste eum culpa quam nihil aliquam itaque id numquam aliquid fugiat saepe enim maiores! Eaque rem accusamus voluptatibus, repudiandae dignissimos tempore ipsa nisi eveniet animi mollitia laudantium reprehenderit porro at quasi.</p>
            </div>
            <div className={styles.blog_interaction}>
                <p>(5) likes/ (5) comments</p>
                <p>Posted on (date)</p>
            </div>
        </div>
    );

};

// Full blog
export const Blog = () => {
    return (
        <div>Full blog</div>
    );
};

// Blog Cloud
export const Cloud = () => {
    return (
        <div>Blog Cloud</div>
    );
};
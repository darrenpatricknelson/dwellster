// This component will house every blog state
// There are 3 blog states
// CARD (a summary), BLOG (the full blog) and CLOUD (a state when adding a new blog)

// styles
import styles from '../styles/Blogs.module.css';


// Blog Card
export const Card = ({ isAdmin, blog, button }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3>{blog.title}</h3>
            </div>
            <div className={styles.body}>
                <p>{blog.description}</p>
            </div>
            <div className={styles.blog_interaction}>
                <p>{blog.likes.length} likes/ {blog.comments.length} comments</p>
            </div>
            {isAdmin && button}
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
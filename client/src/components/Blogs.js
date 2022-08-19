// This component will house every blog state
// There are 2 blog states
// CARD (a summary) and BLOG (the full blog) 

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
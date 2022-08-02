// This component will be the container for the blog output
// It will either output a home blog page for the admin or a blog page for the user

// imports
import { useState } from 'react';

// components
import { Card, Blog, Cloud } from './Blogs.js';
import { Primary } from './Buttons.js';

// styles
import styles from '../styles/Container.module.css';

const Container = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <div className={styles.container}>
            {isAdmin ?
                <div>
                    <div className={styles.button_AddBlog}>
                        <Primary text="Whats on your mind today..." />
                    </div>
                    <div className={styles.blog_cards}>
                        <Card admin={true} />
                        <Card admin={true} />
                        <Card admin={true} />
                        <Card admin={true} />
                        <Card admin={true} />
                        <Card admin={true} />
                    </div>

                </div>
                :
                <div className={styles.blog_cards}>
                    <Card admin={false} />
                    <Card admin={false} />
                    <Card admin={false} />
                    <Card admin={false} />
                    <Card admin={false} />
                    <Card admin={false} />
                </div>
            }

        </div>
    );
};

export default Container;
// This component will be the container for the blog output
// It will either output a home blog page for the admin or a blog page for the user

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// imports
import { useState } from 'react';

// components
import { Card, Blog, Cloud } from './Blogs.js';
import { Primary } from './Buttons.js';

const lists = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// styles
import styles from '../styles/BlogContainer.module.css';

const BlogContainer = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div className={styles.container}>
            <button onClick={(e) => {
                e.preventDefault();
                setIsAdmin(prev => !prev);
            }}>state</button>
            <div>
                {isAdmin &&
                    <div className={styles.button_AddBlog}>
                        <Primary text="Whats on your mind today..." />
                    </div>
                }

                <div className={styles.clear_Float}></div>
                <Container>
                    <Row sm={12} md={12} lg={6} xl={4}>
                        {lists.map((list) =>
                            <Col>
                                <Card key={list} isAdmin={isAdmin} />
                            </Col>
                        )}
                    </Row>
                </Container>
                <div className={styles.blog_cards}>
                    {/* <Card isAdmin={isAdmin} />
                    <Card isAdmin={isAdmin} />
                    <Card isAdmin={isAdmin} />
                    <Card isAdmin={isAdmin} />
                    <Card isAdmin={isAdmin} /> */}
                </div>

            </div>

        </div>
    );
};

export default BlogContainer;
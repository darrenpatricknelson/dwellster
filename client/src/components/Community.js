// This component will be the container for the blog output
// It will either output a home blog page for the admin or a blog page for the user

// imports
import { useUserContext } from '../hooks/useUserContext.js';

// bootstrap imports
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// components
import { Blog, Card, Cloud } from './Blogs.js';
import { Primary } from './Buttons.js';

// styles 
import styles from '../styles/Community.module.css';

const lists = [1, 1, 1, 1, 1, 1, 1, 1, 1];

const Community = () => {
    // create context and deconstruct the admin property
    const { user } = useUserContext();
    const { isAdmin } = user;

    return (
        <div>
            <div>
                {isAdmin &&
                    <div className={styles.button_AddBlog}>
                        <Primary text="Whats on your mind today..." />
                    </div>
                }
                <div className={styles.clear_Float}>
                    <Container>
                        <Row sm={12} md={12} lg={6} xl={4}>
                            {lists.map((list) =>
                                <Col>
                                    <Card key={list} isAdmin={isAdmin} />
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
                <div className={styles.blog_cards}>
                </div>
            </div>
        </div>
    );
};

export default Community;

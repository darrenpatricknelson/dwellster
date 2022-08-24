// This component will house every blog state
// There are 2 blog states
// CARD (a summary) and BLOG (the full blog) 

// styles
// Blog.css


// Blog Card
export const Card = ({ isAdmin, blog, button }) => {
    return (
        <div className={'blogs_card'}>
            <div className={'blogs_header'}>
                <h3>{blog.title}</h3>
            </div>
            <div className={'blogs_body'}>
                <p>{blog.description}</p>
            </div>
            <div>
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
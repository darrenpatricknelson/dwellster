// this component will be used to create a layout for each page that is behind the authentication wall

// imports
import Header from './Header.js';
import Navbar from './Navbar.js';

// styles
// Layout.css

const Layout = ({ children, page }) => {
    return (
        <div className={'layout_container'}>
            <Header page={page} />
            <div className={'layout_container_Body'}>
                <Navbar />
                <div className={'layout_blog_container'}>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
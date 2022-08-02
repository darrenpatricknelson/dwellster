// this component will be used to create a layout for each page that is behind the authentication wall

// imports
import Header from './Header.js';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
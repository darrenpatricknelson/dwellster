// imports
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext.js';

// components
import { Warning } from './Buttons.js';

// styles
// Header.css

const Header = ({ page }) => {
    const { user } = useUserContext();
    const { communityTitle } = useParams();

    // function deals with a user logging out
    const handleLogout = () => {
        sessionStorage.clear();
    };


    return (
        <>
            {/* A header component to display page names above the URL */}
            <Helmet>
                <title>Dwellster | {page}</title>
            </Helmet>

            {/* The header bar */}
            <div className={'header'}>
                <h1 className={'header_heading'}>Dwellster - come Dwell with me</h1>
                <div className={'header_info'}>
                    <div className={'header_admin'}>
                        {communityTitle && <h3>{communityTitle}</h3>}
                    </div>
                    <div className={'header_user'}>
                        <h3 className={'header_username'}>Welcome {`${user.name} ${user.surname}`}</h3>
                        <div className={'header_button'}>
                            <a href="/">
                                <Warning onClick={handleLogout} text='Logout' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
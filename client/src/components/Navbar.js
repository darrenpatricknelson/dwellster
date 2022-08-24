// this component will be used to create a Navbar 

// Imports 
import { useUserContext } from '../hooks/useUserContext.js';

// styles
// Buttons.css
// Navbar.css

const Navbar = () => {
    const { user } = useUserContext();

    return (
        <div className={'navbar'}>

            <div className={'navbar_buttons'}>
                <div className={'navbar_community_button'}>
                    <a href="/home/community">
                        <div className={`navbar_links button_ button_caution`}>
                            Community
                        </div>
                    </a>
                </div>
                <div className={'navbar_join_button'}>
                    <a href="/home/join">
                        <div className={`navbar_links button_ button_interaction`}>
                            {user.isAdmin ? 'Create a community' : 'Join a community'}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;;
// imports
import { useContext } from 'react';
import { CommunityContext } from '../context/Community.context.js';

// In this file, we simply creating the useContext hook so that we can use iot globally 


export const useCommunityContext = () => {
    // create the context
    const context = useContext(CommunityContext);

    // if context is null, we will throw and error
    // this will only happen if we try to use the context outside of the functioning tree
    // However, since we wrapped the contextProvider around the App component in index.js
    // This error will most likely never be thrown
    if (!context) {
        throw Error('useUserContext must be used inside a UserContextProvider');
    }

    // return the context
    return context;
};


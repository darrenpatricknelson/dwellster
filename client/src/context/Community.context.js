// imports 
import React from 'react';
// we will be using createContext for global props as well as useReducer to update the state reactively  
import { createContext, useReducer } from 'react';

// create our context
export const CommunityContext = createContext();

// create my reducer function
export const communityReducer = (state, action) => {
    // Create the switch case functionality
    switch (action.type) {
        case 'GET_COMMUNITY':
            return {
                community: action.payload
            };

        default:
            return state;
    }
};

export const CommunityContextProvider = ({ children }) => {
    // create the reducer hook
    const [state, comDispatch] = useReducer(communityReducer, {
        community: null
    });


    return (
        <CommunityContext.Provider value={{ ...state, comDispatch }}>
            {children}
        </CommunityContext.Provider>
    );
};

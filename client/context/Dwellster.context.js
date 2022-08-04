// imports 
// we will be using createContext for global props as well as useReducer to update the state reactively  
import { createContext, useReducer } from 'react';

// Will be creating context for both the user as well as the community
export const UserContext = createContext();
export const CommunityContext = createContext();

// create my reducer function
export const userReducer = (userState, action) => {
    // Create the switch case functionality
    switch (action.type) {
        case 'GET_USER':
            return {
                user: action.payload
            };
        case 'CREATE_USER':
            return {
                user: action.payload
            };
        case 'UPDATE_USER_CREATE_TASK':
            return {
                user: action.payload
            };
        case 'UPDATE_USER_DELETE_TASK':
            return {
                user: action.payload
            };

        default:
            return state;
    }
};

export const DwellsterContextProvider = ({ children }) => {
    // create the reducer hook
    const [userState, dispatch] = useReducer(userReducer, {
        user: null
    });


    return (
        <DwellsterContext.Provider value={{ ...userState, dispatch }}>
            {children}
        </DwellsterContext.Provider>
    );
};

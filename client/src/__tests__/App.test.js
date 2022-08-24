import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App.js';
import { CommunityContextProvider } from '../context/Community.context.js';
import { UserContextProvider } from '../context/User.context.js';

test('App renders correctly', () => {
    const tree = renderer
        .create(
            <UserContextProvider>
                <CommunityContextProvider>
                    <App />
                </CommunityContextProvider>
            </UserContextProvider>

        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
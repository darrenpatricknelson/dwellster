import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header.js';
import { CommunityContextProvider } from '../context/Community.context.js';
import { UserContextProvider } from '../context/User.context.js';


it('Header component has the name and slogan of the app in it', () => {
    render(
        <UserContextProvider>
            <CommunityContextProvider>
                <Header page={'Home'} />
            </CommunityContextProvider>
        </UserContextProvider>
    );
    expect(screen.getByText('Dwellster - come Dwell with me')).toBeInTheDocument();
});
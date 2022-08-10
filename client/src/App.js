import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCommunityContext } from './hooks/useCommunityContext.js';
import { useUserContext } from './hooks/useUserContext.js';

// pages
import AddNewBlog from './pages/AddNewBlog.js';
import Authentication from './pages/Authentication.js';
import Community from './pages/Community.js';
import CommunityBlogs from './pages/CommunityBlogs.js';
import Home from './pages/Home.js';
import Join from './pages/Join.js';
import LoadingPage from './pages/LoadingPage.js';

// component
import Loading from './components/Loading.js';

// api requests
import { getCommunity, getUserDetails } from './apiRequests/requests.api.js';

const App = () => {
  // destructure context
  const { dispatch } = useUserContext();
  const { comDispatch } = useCommunityContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  // function that deals with a user signing up/ logging in
  const handleAuth = async (user) => {
    setIsLoading(true);

    sessionStorage.setItem('auth', true);
    const state = sessionStorage.getItem('auth');
    sessionStorage.setItem('token', user.user.token);
    sessionStorage.setItem('user', user.user.name);
    dispatch({ type: 'GET_USER', payload: user.user });
    // get communities
    const communities = await getCommunity(user.user.token);
    comDispatch({ type: 'GET_COMMUNITY', payload: communities.community });
    setIsLoading(false);
    setIsLoggedIn(state);
  };

  // creating a session variable 
  useEffect(() => {
    // the following function checks if a user exists in the session storage
    // I used session storage because I don't want to use cookies for such a small project
    const checkUserAuthentication = async () => {
      setIsLoading(true);
      if (!sessionStorage.token) {
        setIsLoading(false);
        return sessionStorage.setItem('auth', false);

      }

      // if there is a user, we with fetch their details
      const state = sessionStorage.getItem('auth');
      const token = sessionStorage.getItem('token');
      const data = await getUserDetails(token);
      dispatch({ type: 'GET_USER', payload: data });



      // we change the state to true
      setIsLoading(false);
      setIsLoggedIn(state);
    };

    checkUserAuthentication();
  }, []);


  if (isLoading) {
    return (
      <div className="loading_container">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div className="loading_container"><LoadingPage isLoggedIn={isLoggedIn} /> </div>} />
            <Route path="/authentication" element={<Authentication handleAuth={handleAuth} isLoggedIn={isLoggedIn} />} />
            <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/home/join" element={<Join isLoggedIn={isLoggedIn} />} />
            <Route path="/home/community" element={<Community isLoggedIn={isLoggedIn} />} />
            <Route path="/home/community/:title" element={<CommunityBlogs isLoggedIn={isLoggedIn} />} />
            <Route path="/home/community/add" element={<AddNewBlog isLoggedIn={isLoggedIn} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
// imports
import Head from "next/head";
import { useRouter } from "next/router";
import { NextRequest, NextResponse } from 'next/server';
import { useEffect, useState } from "react";
import { ThemeProvider } from 'react-bootstrap';
import Layout from "../components/Layout";

// context
import { UserContextProvider } from "../context/User.context.js";
// my styles
import '../styles/globals.css';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';



function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);




  // setup use router
  const router = useRouter();

  // function that deals with a user signing up/ logging in
  const handleAuth = (user) => {
    sessionStorage.setItem('auth', true);
    sessionStorage.setItem('user', user.user.email);
    const state = sessionStorage.getItem('auth');

    // console.log(user); {status: 200, user {...}}
    router.replace('/home');
    setIsAuthenticated(state);
  };

  // use effect to validate the user is authenticated
  useEffect(() => {
    const checkUserAuthentication = async () => {

      // setIsLoading(true);
      if (!sessionStorage.user) {
        setIsAuthenticated(false);
        router.replace('/authentication');
        return sessionStorage.setItem('auth', false);
      }

      router.replace('/');
      const state = sessionStorage.getItem('auth');
      const user = sessionStorage.getItem('user');

      setIsAuthenticated(state);
    };

    checkUserAuthentication();


  }, []);


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* theme provider is context from bootstrap */}
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        {/* dwellsterContextProvider is context created by myself */}
        <UserContextProvider>
          {isAuthenticated ?
            <Layout>
              <Component {...pageProps} />
            </Layout>
            :
            <Component {...pageProps} handleAuth={handleAuth} />
          }
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

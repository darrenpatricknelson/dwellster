// imports
import Head from "next/head";
import { useRouter } from "next/router";
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

  // use effect to validate the user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/authentication');
    } else {
      router.replace('/');

    }

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
            <Component {...pageProps} />
          }
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

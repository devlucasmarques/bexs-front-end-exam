import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import Header from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp

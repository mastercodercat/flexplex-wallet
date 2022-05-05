import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from "react-query";

import '../styles/globals.css';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp

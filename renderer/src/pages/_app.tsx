import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from "react-query";
import useInitialization from '@/hooks/useInitialization'
import useWalletConnectEventsManager from '@/hooks/useWalletConnectEventsManager'
import Layout from '@/components/Layout';
import Modal from '@/components/walletConnect/Modal';
import '@/styles/globals.css';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  // Step 1 - Initialize wallets and wallet connect client
  const initialized = useInitialization()

  // Step 2 - Once initialized, set up wallet connect event manager
  useWalletConnectEventsManager(initialized)

  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <QueryClientProvider client={queryClient}>
          <Layout initialized={initialized}>
            <Component {...pageProps} />
          </Layout>

          <Modal />
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp

import { useState } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Nav, Footer } from '@/components/common';
import { StateProvider } from '@/store';
import './globals.css';

const ibmPlexMono = IBM_Plex_Mono({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const [transactionData, setTransactionData] = useState<TransactionData | undefined>(undefined);
  const [tokenData, setTokenData] = useState<TokenData | undefined>(undefined);
  return (
    <>
      <Head>
        <title>Quai Network Sample Dapp</title>
        <meta name="description" content="A sample dapp built on Quai Network." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StateProvider>
        <main className={ibmPlexMono.className}>
          <Nav />
          <Component
            {...pageProps}
            tokenData={tokenData}
            transactionData={transactionData}
            setTransactionData={setTransactionData}
            setTokenData={setTokenData}
          />
          <Footer />
        </main>
      </StateProvider>
    </>
  );
}

export default MyApp;

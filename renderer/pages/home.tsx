import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ipcRenderer } from 'electron'

const Home = () => {
  useEffect(() => {
    if(ipcRenderer) {
      ipcRenderer.invoke('message').then(value=>{
        alert(value)
      })
    }else {
        alert('oh')
      }
    }
  , []);
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
};

export default Home;

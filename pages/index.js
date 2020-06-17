import React, { useEffect } from 'react';
import Head from 'next/head';
import { getInitialLocale } from '../lib/translations/getInitialLocale';
import Router from "next/router";

const Index = () => {
  useEffect(() => {
    if(Router.pathname === '/' ){
      Router.replace(`/${getInitialLocale()}`);
    }
  });
  return (
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
  );
};

export default Index;
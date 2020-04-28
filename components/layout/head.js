import Head from "next/head";
import metadata from "../../translations/metas";
import React from "react";
import useTranslation from "../../hooks/useTranslation";
import {useRouter} from "next/router";

const head = () => {
  const { locale } = useTranslation();
  const router = useRouter();

  const mainPage = router.asPath.split('/')[2] ? '/' + router.asPath.split('/')[2] : '/';
  const subPage = router.asPath.split('/')[3] ? '/' + router.asPath.split('/')[3] : '';

  return (
      <Head>
        <title>{metadata[locale][mainPage + subPage].title}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={metadata[locale][mainPage + subPage].description}/>
      </Head>
  );
};

export default head;
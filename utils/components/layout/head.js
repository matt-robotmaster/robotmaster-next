import React, { useEffect } from "react";
import Head from "next/head";
import metadata from "../../../lib/translations/metas";
import useTranslation from "../../hooks/useTranslation";
import {useRouter} from "next/router";
import { initGA, logPageView } from "../../../lib/analytics";

const head = () => {
  const { locale } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  const mainPage = router.asPath.split('/')[2] ? '/' + router.asPath.split('/')[2] : '/';
  const subPage = router.asPath.split('/')[3] ? '/' + router.asPath.split('/')[3] : '';

  return (
      <Head>
        <title>{(metadata[locale] && metadata[locale][mainPage + subPage]) ? metadata[locale][mainPage + subPage].title : ''}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={(metadata[locale] && metadata[locale][mainPage + subPage]) ? metadata[locale][mainPage + subPage].description : ''}/>
      </Head>
  );
};

export default head;
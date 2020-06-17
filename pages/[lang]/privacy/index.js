import React, {useEffect} from 'react';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from "../../../utils/hooks/useTranslation";
import withLocale from "../../../utils/hocs/withLocale";
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const privacy = () => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

  return (
      <Layout banner={{
        caption: t('privacy-page-caption')
      }}>
        <h1>
          {t('privacy-page-caption')}
        </h1>
        <p>
          {t('privacy-section-1-para-1')}
        </p>
        <h3>
          {t('privacy-heading-2')}
        </h3>
        <p>
          {t('privacy-section-2-para-1')}
        </p>
        <p>
          {t('privacy-section-2-para-2')}
        </p>
        <h3>
          {t('privacy-heading-3')}
        </h3>
        <p>
          {t('privacy-section-3-para-1')}
        </p>
        <p dangerouslySetInnerHTML={{
          __html: t('privacy-section-3-para-2')
          .replace('{resources}',
              `<a href="http://www.privacyalliance.org/resources/" target="_blank">
              http://www.privacyalliance.org/resources/
            </a>`)
        }}/>
        <p>
          {t('privacy-section-3-para-3')}
        </p>
        <p>
          {t('privacy-section-3-para-4')}
        </p>
        <p dangerouslySetInnerHTML={{
          __html: t('privacy-section-3-para-5')
          .replace('{webmaster}',
              `<a href="mailto:webmaster@robotmaster.com">
              ${t('privacy-section-3-para-5-webmaster')}
            </a>`)
        }}/>
        <h3>
          {t('privacy-heading-4')}
        </h3>
        <p>
          Attn. Privacy Policy.
        </p>
        <p>
          <b>
            Robotmaster
          </b>
          <br />
          5929 Rte Transcanadienne, suite 330
          <br />
          St. Laurent (QC)
          <br />
          Canada H4T 1Z6
          <br />
          <br />
          Tel : (514) 225-2206
          <br />
          Fax : (514) 221-3661
          <br />
          {'e-mail: '}
          <a href="mailto:webmaster@robotmaster.com">
            webmaster@robotmaster.com
          </a>
        </p>
      </Layout>
  );
};

export default withLocale(privacy);

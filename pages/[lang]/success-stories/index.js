import React, {useEffect} from 'react';
import withLocale from '../../../utils/hocs/withLocale';
import Layout from '../../../utils/components/layout/layout';
import useTranslation from '../../../utils/hooks/useTranslation';
import classes from './index.module.css';
import {getSuccessStoriesDataByLocales} from "../../../lib/success-stories";
import Link from "next/link";
import {Container} from "react-bootstrap";
import {isLocale} from "../../../lib/translations/types";
import Router from "next/router";
import {getInitialLocale} from "../../../lib/translations/getInitialLocale";

const successStories = ({successStories}) => {
  const { t, locale } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !isLocale(locale)) {
      Router.replace(`/${getInitialLocale()}/${Router.asPath.split('/').slice(2).join('/')}`);
    }
  });

  const customerStories = successStories[locale].filter(story => !story.article);
  const mediaStories = successStories[locale].filter(story => story.article);

  return (
      <Layout
          banner={{caption: t('success-page-caption')}}
          menu={[{
            caption: t('success-section-1-title'),
            url: 'success-stories#customer',
          }, {
            caption: t('success-section-2-title'),
            url: 'success-stories#media',
          }]}
      >
        <Container>
          <h1 id='customer'>
            {t('success-section-1-title')}
          </h1>
          {customerStories.map(story => (
              <div key={story.id}>
                <h4>{story.title}</h4>
                <div>
                  {`${t('success-application')}: `}
                  <span className={classes.successStoriesApplication}>{story.application}</span>
                </div>
                <div>
                  {`${t('success-industry')}: `}
                  <span className={classes.successStoriesIndustry}>{story.industry}</span>
                </div>
                <br/>
                <div className={classes.successStoriesSummaryDiv}
                    dangerouslySetInnerHTML={{
                      __html: story.summary,
                    }} />
                <Link href={`/${locale}/success-stories/${story.link}`}>
                    {t('general-read-full')}
                </Link>
                <hr />
              </div>
          ))}

          <h1 id='media'>
            {t('success-section-2-title')}
          </h1>
          {mediaStories.map(story => (
              <div key={story.id}>
                <h4>{story.title}</h4>
                <div>
                  {`${t('success-article')}: `}
                  <span className={classes.successStoriesArticle}>{story.article}</span>
                </div>
                <br/>
                <div className={classes.successStoriesSummaryDiv}
                     dangerouslySetInnerHTML={{
                       __html: story.summary,
                     }} />
                <div className={classes.successStoriesSummaryDiv}>
                  <img src={story.articleImagePath} alt={story.title}/>
                </div>
                <Link href={`${story.articleUrl}`}>
                  {t('general-read-full')}
                </Link>
                <hr />
              </div>
          ))}
        </Container>
      </Layout>
  );
};

successStories.getInitialProps = async () => {
  const successStories = await getSuccessStoriesDataByLocales();
  return {
    successStories
  };
};

export default withLocale(successStories);

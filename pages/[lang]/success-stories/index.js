import React from 'react';
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import useTranslation from '../../../hooks/useTranslation';
import classes from './index.module.css';
import {getSuccessStoriesDataByLocales} from "../../../lib/success-stories";
import Link from "next/link";
import {Container} from "react-bootstrap";

const successStories = ({successStories}) => {
  const { locale, t } = useTranslation();
  const customerStories = successStories[locale].filter(story => !story.article);
  const mediaStories = successStories[locale].filter(story => story.article);

  return (
      <Layout>
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
                     }} ></div>
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

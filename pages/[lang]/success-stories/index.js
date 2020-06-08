import React from 'react';
import withLocale from '../../../hocs/withLocale';
import Layout from '../../../components/layout/layout';
import useTranslation from '../../../hooks/useTranslation';
import classes from './index.module.css';
import {getSuccessStoriesData} from "../../../lib/success-stories";
import Link from "next/link";
import {Container} from "react-bootstrap";

const successStories = ({successStories}) => {
  const { locale, t } = useTranslation();

  return (
      <Layout>
        <Container>
          {successStories.map(successStory => (
              <div key={successStory.id}>
                <h4>{successStory.title}</h4>
                <div>
                  {`${t('success-application')}: `}
                  <span className={classes.successStoriesApplication}>{successStory.application}</span>
                </div>
                <div>
                  {`${t('success-industry')}: `}
                  <span className={classes.successStoriesIndustry}>{successStory.industry}</span>
                </div>
                <br/>
                <div className={classes.successStoriesSummaryDiv}
                    dangerouslySetInnerHTML={{
                      __html: successStory.summary,
                    }} />
                <Link href={`/${locale}/success-stories/${successStory.link}`}>
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
  const successStories = await getSuccessStoriesData();
  console.log(successStories);
  return {
    successStories
  };
};

export default withLocale(successStories);

import React from 'react';
import withLocale from "../../../hocs/withLocale";
import Layout from '../../../components/layout/layout';

const Home = () => {
  return (
      <Layout>
        About!
      </Layout>
  );
};

export default withLocale(Home);

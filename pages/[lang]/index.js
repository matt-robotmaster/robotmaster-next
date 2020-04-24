import Head from 'next/head';
import { withTranslation } from '../../i18n';
import Layout from '../../components/layout/layout';

const Home = ({ t }) => {
  return (
      <Layout>
        <Head>
          <title>Create Next App </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        Yeah index page!
      </Layout>
  );
};

Home.getInitialProps = async () => {
  return { namespacesRequired: ['common'] };
}

export default withTranslation('common')(Home);

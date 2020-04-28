import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//TODO: transform to use css modules
import '../components/layout/sidebar/sidebar.css';
import '../components/layout/social-actions/social-actions.css';
import '../components/layout/topbar/topbar.css';

const RobotMasterApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default RobotMasterApp;
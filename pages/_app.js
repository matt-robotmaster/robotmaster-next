import React from 'react';
import './custom.scss';
import './styles.css';

//TODO: transform to use css modules
import '../components/layout/topbar/topbar.css';

const RobotMasterApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default RobotMasterApp;
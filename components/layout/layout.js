import React from 'react';
import Topbar from "./topbar/topbar";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import SocialPages from "./social-actions/social-actions";
import Head from "./head";

export default function ({children}) {
    return (
        <div className={'layout'}>
          <Head/>
          <Topbar/>
          <Navbar/>
          {children}
          <Footer/>
          <SocialPages/>
        </div>
    );
}

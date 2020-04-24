import React from 'react';
import Topbar from "./topbar/topbar";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import SocialPages from "./social-actions/social-actions";

export default function (props) {
    return (
        <div className={'layout'}>
          <Topbar/>
          <Navbar/>
          {props.children}
          <Footer/>
          <SocialPages/>
        </div>
    );
}

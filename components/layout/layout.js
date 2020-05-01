import React from 'react';
import Topbar from "./topbar/topbar";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import SocialPages from "./social-actions/social-actions";
import Head from "./head";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./layout.module.css";
import Banner from '../banner/banner';

export default function ({children, menu, banner}) {
  const createMenuItem = (item) => {
    return (
        <li key={item.url}>
          <a href={item.url}>
            {item.caption}
          </a>
        </li>
    );
  };
  return (
      <div className={'layout'}>
        <Head/>
        <Topbar/>
        <Navbar/>
        {banner ? (
            <Banner
                caption={banner.caption}
                imageSrc={banner.imageSrc}
            />
        ): null}
        <Container className={classes.content}>
          <Row>
            <Col md={menu ? 9 : 12} sm={menu ? 12 : 0}>
              {children}
            </Col>
            {menu ? (
                <Col md={3} className='hidden-xs hidden-sm'>
                  <div id='navbar' className={classes.sidebar}>
                    <ul className='nav'>
                      {menu.map(item => createMenuItem(item))}
                    </ul>
                  </div>
                </Col>
            ) : null
            }
          </Row>
        </Container>
        <Footer/>
        <SocialPages/>
      </div>
  );
}

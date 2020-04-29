import React, { useState } from "react";
import {Container, Carousel, Row, Col} from 'react-bootstrap';
import events from '../../data/events.json';
import classes from './ribbon.module.css';
import useTranslation from "../../hooks/useTranslation";
import Link from "next/link";

const ribbon = () => {
  const { locale, t } = useTranslation();
  const [posts] = useState([]);

  // TODO: fix this
  const getLatestNewsroomImgSrc = () => {
    if (posts) {
      if (typeof posts[0] !== 'undefined' &&
          typeof posts[0].home !== 'undefined' &&
          posts[0].home !== '') {
        return posts[0].home;
      } else if (typeof posts[0] !== 'undefined' &&
          typeof posts[0].preview !== 'undefined' &&
          posts[0].preview !== '') {
        return posts[0].preview;
      } else {
        return '';
      }
    }
  };

  return (
      <Container className={classes.ribbon}>
        <Row>
          <Col md={6} sm={12} className={classes.bannerSlideElement}>
            <Link href={`${locale}/newsroom`} passHref>
              <a className={classes.ribbonA} >
                <div className={classes.imgContainer}>
                  <img alt='Latest News' className={`${classes.fixedImageImg} ${classes.imgContainerImg}`} src={getLatestNewsroomImgSrc()} />
                </div>
              </a>
            </Link>
            <h2 className={classes.ribbonH2}>
              {t('ribbon-heading-3')}
            </h2>
            <Link href={`${locale}/newsroom`} passHref>
              <a className={classes.ribbonA} >
                {t('ribbon-desc-2')}
              </a>
            </Link>
          </Col>
          <Col md={6} sm={12} className={classes.bannerSlideElement}>
            <Link href={`${locale}/events`} passHref>
              <a className={classes.ribbonA} >
                <div className={classes.imgContainer}>
                  <Carousel indicators={false}>
                    {events.filter(event => event.home).map(event => {
                      return (
                          <Carousel.Item>
                            <img
                                className={`${classes.imgContainerImg} d-block w-100`}
                                src={event.img}
                                alt="slide"
                            />
                          </Carousel.Item>
                      )
                    })}
                  </Carousel>
                </div>
              </a>
            </Link>
            <h2 className={classes.ribbonH2}>
              {t('ribbon-heading-1')}
            </h2>
            <Link href={`${locale}/events`} passHref>
              <a className={classes.ribbonA} >
                {t('ribbon-desc-1')}
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
  );
};

export default ribbon;
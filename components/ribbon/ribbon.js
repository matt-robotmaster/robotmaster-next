import React, { useState } from "react";
import {Container, Carousel, Row, Col} from 'react-bootstrap';

import events from '../../data/events.json';
import classes from './ribbon.module.css';
import useTranslation from "../../hooks/useTranslation";

const ribbon = () => {
  const { t } = useTranslation();
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

  //TODO: fix hrefs

  return (
      <Container className={classes.ribbon}>
        <Row>
          <Col md={6} sm={12} className={classes.bannerSlideElement}>
            <a href="newsroom" className={classes.ribbonA} >
              <div className={classes.imgContainer}>
                <img alt='Latest News' className={[classes.fixedImageImg, classes.imgContainerImg]} src={getLatestNewsroomImgSrc()} />
              </div>
            </a>
            <h2 className={classes.ribbonH2}>
              {t('ribbon-heading-3')}
            </h2>
            <a href="newsroom" className={classes.ribbonA} >
                {t('ribbon-desc-2')}
            </a>
          </Col>
          <Col md={6} sm={12} className={classes.bannerSlideElement}>
            <a href="events" className={classes.ribbonA} >
              <div className={classes.imgContainer}>
                <Carousel indicators={false}>
                  {events.filter(event => event.home).map(event => {
                    return (
                        <Carousel.Item>
                          <img
                              className={[classes.imgContainerImg, "d-block", "w-100"]}
                              src={event.img}
                              alt="slide"
                          />
                        </Carousel.Item>
                    )
                  })}
                </Carousel>
              </div>
            </a>
            <h2 className={classes.ribbonH2}>
              {t('ribbon-heading-1')}
            </h2>
            <a href="events" className={classes.ribbonA} >
              {t('ribbon-desc-1')}
            </a>
          </Col>
        </Row>
      </Container>
  );
};

export default ribbon;
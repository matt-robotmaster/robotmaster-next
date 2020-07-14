import React from "react";
import {Container, Carousel, Row, Col} from 'react-bootstrap';
import events from '../../../content/events.json';
import classes from './ribbon.module.css';
import useTranslation from "../../hooks/useTranslation";
import Link from "next/link";

const ribbon = ({latestPost}) => {
  const { locale, t } = useTranslation();

  return (
      <Container className={classes.ribbon}>
        <Row>
          <Col lg={6} sm={12} className={classes.bannerSlideElement}>
            <Link href={`/${locale}/newsroom`} passHref>
              <a className={classes.ribbonA} >
                <div className={classes.imgContainer}>
                  <img alt='Latest News' className={`${classes.fixedImageImg} ${classes.imgContainerImg}`} src={latestPost.home} />
                </div>
              </a>
            </Link>
            <h2 className={classes.ribbonH2}>
              {t('ribbon-heading-3')}
            </h2>
            <Link href={`/${locale}/newsroom`} passHref>
              <a className={classes.ribbonA} >
                {t('ribbon-desc-2')}
              </a>
            </Link>
          </Col>
          <Col lg={6} sm={12} className={classes.bannerSlideElement}>
            <Link href={`/[lang]/events`} as={`/${locale}/events`} passHref>
                <div className={`${classes.imgContainer} ${classes.ribbonA}`}>
                  <Carousel indicators={false}>
                    {events.filter(event => event.home).map(event => {
                      return (
                          <Carousel.Item key={event.img}>
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
            </Link>
            <h2 className={classes.ribbonH2}>
              {t('ribbon-heading-1')}
            </h2>
            <Link href={`/[lang]/events`} as={`/${locale}/events`} passHref>
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

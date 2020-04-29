import React from "react";
import {Container} from 'react-bootstrap';
import classes from './banner.module.css';
import useTranslation from "../../hooks/useTranslation";

const banners = [
  '/img/banner-00.jpg',
  '/img/banner-01.jpg',
  '/img/banner-02.jpg',
  '/img/banner-03.jpg',
  '/img/banner-04.jpg',
];

const banner = (props) => {
  const { t } = useTranslation();

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const bannerImageSrc = (props.bannerImageSrc) ? props.bannerImageSrc : banners[randomIntFromInterval(0, 4)];
  const caption = (props.caption) ? t(props.caption) : '';

  return (
      <Container fluid className={classes.banner}>
        <div
            className={classes.bannerImgContainer}
            style={{
              backgroundImage: `url(${bannerImageSrc})`
            }} />
        {caption ? (
            <div className={`hidden-xs ${classes.caption}`}>
              {caption}
            </div>) : ''
        }
      </Container>
  );
};

export default banner;
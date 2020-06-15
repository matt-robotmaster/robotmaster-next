import React from "react";
import {Container} from 'react-bootstrap';
import classes from './banner.module.css';

const banners = [
  '/img/banner-00.jpg',
  '/img/banner-01.jpg',
  '/img/banner-02.jpg',
  '/img/banner-03.jpg',
  '/img/banner-04.jpg',
];

const banner = (props) => {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const bannerImageSrc = (props.imageSrc) ? props.imageSrc : banners[randomIntFromInterval(0, 4)];
  const caption = (props.caption) ? props.caption : '';

  return (
      <Container fluid className={classes.banner}>
        <div
            className={classes.bannerImgContainer}
            style={{
              backgroundImage: `url(${bannerImageSrc})`
            }} >
          {caption ? (
              <div className={`hidden-xs ${classes.caption}`}>
                {caption}
              </div>) : ''
          }
        </div>
      </Container>
  );
};

export default banner;
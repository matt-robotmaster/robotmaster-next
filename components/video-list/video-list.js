import React from "react";
import applicationData from '../../data/applications.json';
import {Col, Row} from "react-bootstrap";
import classes from "./video-list.module.css";
import Modal from "../modal/video-modal";
import useTranslation from "../../hooks/useTranslation";

const videoList = ({id}) => {
  const { t } = useTranslation();
  const createVideoList = (id) => {
    const appData = applicationData.find(app => app.id === id);
    const page = appData.id;
    const videos = [];

    for (let i = 1; i <= appData.videos; i++) {
      const vidImgSrc = `/img/application/${page}/vid-${i}.png`;
      const vidTextId = `app-${page}-vid-${i}-text`;
      const videoUrl = `https://www.youtube.com/embed/${t(`app-${page}-vid-${i}`).split('v=')[1]}`;
      videos.push(
          <Col xs={12} sm={6} md={6} lg={6} key={'vid-' + i}>
            <div className={`${classes.appVideo} clearfix`}>
              <div className={`${classes.appVideoVidImg} flex-center-img`}>
                <Modal title={vidTextId} url={videoUrl} imgSrc={vidImgSrc} />
              </div>
              <div className={classes.appVideoText}>
                <p>
                  {t(vidTextId)}
                </p>
              </div>
            </div>
          </Col>
      );
    }
    return videos;
  }

  return (
      <Row id="application-videos-row">
        {createVideoList(id)}
      </Row>
  );
};

export default videoList;
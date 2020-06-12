import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn} from "react-icons/fa";
import classes from './social-actions.module.css';
import { logEvent } from "../../../../lib/analytics";

export default function () {

  const handleClick = (action) => {
    logEvent('social-action', action)
  };

  return (
      <div className={classes.socialActions}>
        <a href="https://www.facebook.com/robotmasterolp"
           onClick={() => handleClick('facebook-page-clicked-side')}
           data-eventid='facebook'>
          <FaFacebookSquare className={classes.socialActionsI}/>
        </a>
        <a href="https://www.instagram.com/robotmaster"
           onClick={() => handleClick('instagram-page-clicked-side')}
           data-eventid='instagram'>
          <FaInstagram className={classes.socialActionsI}/>
        </a>
        <a href="https://www.twitter.com/robotmaster"
           onClick={() => handleClick('twitter-page-clicked-side')}
           data-eventid='twitter'>
          <FaTwitter className={classes.socialActionsI}/>
        </a>
        <a href="https://www.youtube.com/robotmaster"
           onClick={() => handleClick('youtube-page-clicked-side')}
           data-eventid='youtube'>
          <FaYoutube className={classes.socialActionsI}/>
        </a>
        <a href="https://www.linkedin.com/company/robotmaster-"
           onClick={() => handleClick('linkedin-page-clicked-side')}
           data-eventid='linkedin'>
          <FaLinkedinIn className={classes.socialActionsI}/>
        </a>
      </div>
  );
}
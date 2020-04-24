import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function () {

  const handleClick = () => {
    window.ga("send", "pageview", "/social-page-clicked-side");
  };

  return (
      <div className='social-actions'>
        <a href="https://www.facebook.com/robotmasterolp"
           onClick={() => handleClick()}
           data-eventid='facebook'>
          <i className="fa fa-facebook-square"/>
          <FontAwesomeIcon icon={faFacebookSquare}/>
        </a>
        <a href="https://www.instagram.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='instagram'>
          <i className={faInstagramSquare}/>
        </a>
        <a href="https://www.twitter.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='twitter'>
          <i className={faTwitterSquare}/>
        </a>
        <a href="https://www.youtube.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='youtube'>
          <i className={faYoutubeSquare}/>
        </a>
        <a href="https://www.linkedin.com/company/robotmaster-"
           onClick={() => handleClick()}
           data-eventid='linkedin'>
          <i className={faLinkedinIn}/>
        </a>
      </div>
  );
}
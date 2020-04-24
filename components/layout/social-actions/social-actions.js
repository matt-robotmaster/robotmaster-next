import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaLinkedinIn} from "react-icons/fa";

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
          <FaFacebookSquare/>
        </a>
        <a href="https://www.instagram.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='instagram'>
          <FaInstagramSquare/>
        </a>
        <a href="https://www.twitter.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='twitter'>
          <FaTwitterSquare/>
        </a>
        <a href="https://www.youtube.com/robotmaster"
           onClick={() => handleClick()}
           data-eventid='youtube'>
          <FaYoutubeSquare/>
        </a>
        <a href="https://www.linkedin.com/company/robotmaster-"
           onClick={() => handleClick()}
           data-eventid='linkedin'>
          <FaLinkedinIn/>
        </a>
      </div>
  );
}
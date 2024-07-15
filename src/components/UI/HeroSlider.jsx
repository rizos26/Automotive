import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";
import video from "../../assets/all-images/video.mp4";

const HeroSlider = () => {
  return (
    <div className="hero__slider">
      <video className="video__background" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
    </div>
  );
};

export default HeroSlider;
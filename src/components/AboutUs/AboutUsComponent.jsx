import React, { Fragment, useState } from "react";
import "./AboutUs.css";
import logo from "../../Assets/Untitled-12.png"

import Footer from "../footer/Footer";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <>
      <div className="aboutus-wrapper">
        <div className="aboutus-container">
          <div className="text-container">
            <h1 className="title-aboutus">About us</h1>

            <em className="em-aboutus">
              –Welcome to our website!–
            </em>

            <p className="text-aboutus2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>

            {/* <p className="text-aboutus3">
              But more than just a flower shop, Fleur de vie is a community of
              people who share a love for beauty, creativity, and connection. We
              believe in the power of flowers to bring people together, to
              brighten up someone's day, and to create memories that last a
              lifetime. And we're dedicated to making your experience with us as
              special and memorable as the flowers themselves.
            </p> */}

            {/* <p className="text-aboutus4">
              Thank you for choosing Fleur de vie. We look forward to bringing a
              little bit of beauty and joy into your life.
            </p> */}
          </div>
          <div className="image-container">
            <img src={logo} alt="logo" className="aboutus-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

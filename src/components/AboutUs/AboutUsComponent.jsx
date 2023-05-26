import React, { Fragment, useState } from "react";
import "./AboutUs.css";
import Footer from "../footer/Footer";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  }
  return (
    <>  
    <div className="page-start">
    <link href='https://fonts.googleapis.com/css?family=Droid+Sans:700|Droid+Serif' rel='stylesheet' type='text/css' />

<div id="banner">

</div>
<div className="center-abt-us">

<div id="content">
  <h2>About us</h2>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin pellentesque, est ut venenatis aliquam, lorem quam porttitor ligula, eget ultrices velit dui sed quam. Praesent vehicula placerat lectus. Nulla pede. Quisque a nulla quis massa pulvinar sagittis. Pellentesque neque massa, mattis vulputate, pellentesque nec, vehicula volutpat, purus. Proin pretium dui et nulla cursus eleifend. Aenean aliquam urna eget urna. Vestibulum euismod elit. Donec eget augue sit amet neque elementum pretium. Proin posuere lacus id lacus. Duis vel justo suscipit neque ornare iaculis.</p>
  <p>Ut urna urna, rhoncus eget, vestibulum tempus, venenatis non, nunc. Nunc consequat quam in nulla. Praesent feugiat posuere orci. Sed ac ante. Mauris pellentesque massa vitae ante mattis bibendum. Quisque dapibus lectus eu eros. Nulla facilisi. Praesent hendrerit egestas erat. Suspendisse at velit. Quisque mollis feugiat est. Curabitur ut leo. Cras auctor semper augue. Pellentesque leo pede, tempus sed, ornare in, venenatis sed, nisl. Quisque est velit, eleifend vitae, mollis ac, adipiscing at, eros. Mauris velit. Etiam nec lorem. Vestibulum pellentesque ligula a velit. Maecenas felis metus, suscipit et, eleifend vel, accumsan vitae, magna. Phasellus ut justo vel magna congue laoreet.</p>
</div>
</div>
    </div>
   </>

    );
};

export default About;
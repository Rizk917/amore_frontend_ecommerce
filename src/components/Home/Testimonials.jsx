import React from "react";
import "./test.css";
import swipersvg from '../../images/swipe.svg'
function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Mhmd",
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur dolores dolorem.",
    },
    {
      id: 2,
      name: "Risk",
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur dolores dolorem.",
    },
    {
      id: 3,
      name: "test",
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur dolores dolorem.",
    },
  ];

  return (
    <div className="mainer">
      <div className="home-content crsl-wrap">
        {testimonials.map((test, index) => (
          <div className="crsl-card">
            <h1>{test.name}</h1>
            <h2>{test.message}</h2>
          </div>
        ))}
        
      </div>
      <img  src={swipersvg} className="size-auto" alt="swipe" />
    </div>
  );
}

export default Testimonials;

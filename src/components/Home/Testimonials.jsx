import React, { useState, useEffect } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [testimonials]);

  return (
    <div className="mainer">
      <div className="home-content crsl-wrap">
        {testimonials.map((test, index) => (
          <div
            key={test.id}
            className={`crsl-card ${index === currentIndex ? "highlighted" : ""}`}
          >
            <h1>{test.name}</h1>
            <h2>{test.message}</h2>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Testimonials;

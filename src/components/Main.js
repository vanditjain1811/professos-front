import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [firstHovWidth, setFirstHovWidth] = useState(400);

  const handleMouseOver = () => {
    setFirstHovWidth(175); // Change to the width you want on mouseover
  };

  const handleMouseLeave = () => {
    setFirstHovWidth(400); // Change to the default width on mouseleave
  };
  return (
    <div className="hero-cont">
      <div className="hero-text">
        <h1>
          Moving</h1>
     
         <h1> Minds To</h1>
          
          <h1>  Right Places
        </h1>
      </div>

      <div className="hero-imgs">
        <div className="hov first-hov"  style={{ width: `${firstHovWidth}px` }}>
          <div className="cardbody">
            <div className="card-title">
              <h3>People Advisory</h3>
            </div>
          </div>
        </div>
        <div className="hov"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        >
          <div className="cardbody">
            <div className="card-title">
              <h3>People Advisory</h3>
            </div>
          </div>
        </div>
        <div className="hov"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}>
          <div className="cardbody">
            <div className="card-title">
              <h3>People Advisory</h3>
            </div>
          </div>
        </div>
        <div className="hov"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}>
          <div className="cardbody">
            <div className="card-title">
              <h3>People Advisory</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

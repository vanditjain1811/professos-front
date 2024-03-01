import React from "react";
import "./Team.css";
import img1 from "../Images/pexels-photo-2379005.jpeg"

const Team = () => {
  return (
    <div className="team">
      <div className="heading">
        <h1>Our Team</h1>
      </div>
      <div className="cwrap">
        <div className="t-card">
          <div className="t-img">
            <img src={img1} alt=""/>
          </div>
          <div className="card-content">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est laboriosam ipsa eligendi, adipisci illum quaerat iure sit facilis asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, perspiciatis.
          </p>
          <h4>Team name <br /> (Position)</h4></div>
        </div>
        <div className="t-card">
          <div className="t-img">
            <img src={img1} alt=""/>
          </div>
          <div className="card-content">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est laboriosam ipsa eligendi, adipisci illum quaerat iure sit facilis asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, perspiciatis.
          </p>
          <h4>Team name <br /> (Position)</h4></div>
        </div>
        <div className="t-card">
          <div className="t-img">
            <img src={img1} alt=""/>
          </div>
          <div className="card-content">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur est laboriosam ipsa eligendi, adipisci illum quaerat iure sit facilis asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, perspiciatis.
          </p>
          <h4>Team name <br /> (Position)</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

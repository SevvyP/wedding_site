import React, { Component } from "react";
import photo from "../assets/J&I_Engagement-006.jpg";
import { Countdown } from "../components/Countdown";

class Home extends Component {
  render() {
    return (
      <div className="hero-container">
        <img
          src={photo}
          alt="Isaac and Jenna kissing with their dog Duke at their feet"
        />
        <div className="test-container">
          <h1> Isaac Long </h1>
          <p>- And - </p>
          <h1> Jenna Griffin </h1>
        </div>
        <div className="test-container">
          <p>Cass City, MI</p>
        </div>
        <div className="test-container">
          <Countdown />
        </div>
      </div>
    );
  }
}

export default Home;

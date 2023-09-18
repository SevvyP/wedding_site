import React, { Component } from "react";
import photo from "../assets/J&I_Engagement-006.jpg";

class Home extends Component {
  render() {
    const imageStyle = {
      backgroundImage:
        "linear-gradient(to right, rgba(0, 0, 0, 0) 50%,rgba(0, 0, 0, .3)),url(" +
        photo +
        ")",
      height: "100vh",
      //marginTop: "-70px",
      fontSize: "50px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    const nameStyle = {
      fontFamily: "Hatton",
      color: "white",
    };
    return (
      <div style={imageStyle}>
        <div
          style={{
            display: "block",
            textAlign: "right",
            verticalAlign: "top",
            position: "absolute",
            left: "65%",
          }}
        >
          <h1 style={nameStyle}> Isaac Long </h1>
          <p style={nameStyle}>- And - </p>
          <h1 style={nameStyle}> Jenna Griffin </h1>
        </div>
      </div>
    );
  }
}

export default Home;

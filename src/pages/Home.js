import React, { Component } from "react";
import photo from "../assests/J&I_Engagement-006.jpg";

class Home extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${photo})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div style={myStyle}>
        <h1> Long Griffin Wedding </h1>
      </div>
    );
  }
}

export default Home;

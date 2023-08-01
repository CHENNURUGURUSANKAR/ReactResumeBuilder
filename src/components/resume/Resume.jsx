import React from "react";
import "./Resume.css";
import Header from "./header/Header";
import Left from "./left/Left";
import Right from "./right/Right";

// Resume component
export const Resume = React.forwardRef((props, ref) => {
  return (
    <div className="main-resume-container" ref={ref}>
      {/* Header */}
      <div className="header-container">
        <Header />
      </div>

      {/* Content Container */}
      <div className="content-container">
        {/* Left Content */}
        <div className="left-container">
          <Left />
        </div>

        {/* Right Content */}
        <div className="right-container">
          <Right />
        </div>
      </div>
    </div>
  );
});

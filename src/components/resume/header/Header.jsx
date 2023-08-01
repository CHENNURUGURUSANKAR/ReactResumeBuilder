import React from "react";
import "./Header.css"; // Add a separate CSS file for Header styles

const Header = () => {
  return (
    <div className="header-container">
      <input type="text" className="title" placeholder="Enter your name" />

      <input
        type="text"
        className="subtitle"
        placeholder="Enter your job title"
      />
    </div>
  );
};

export default Header;

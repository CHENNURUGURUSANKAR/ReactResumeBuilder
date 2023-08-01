import React, { useRef } from "react";
import { Resume } from "../resume/Resume";
import DownloadButton from "./DownloadButton";
import "./Menu.css";

const Menu = () => {
  const componentRef = useRef();

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2>React Resume </h2>
          <DownloadButton componentRef={componentRef} />
        </div>
      </div>
      <div className="resume-container">
        <Resume ref={componentRef} />
      </div>
    </div>
  );
};

export default Menu;

import ProField from "./ProField";
import React, { useState } from "react";
import "./projects.css";
const Projects = () => {
  const [projects, setPeojects] = useState([{ name: " ", link: " " }]);

  const handleAddEdition = () => {
    setPeojects([...projects, { name: " ", link: " " }]);
  };
  const handleDeleteEdition = (index) => {
    const updatedEditions = [...projects];
    updatedEditions.splice(index, 1);
    setPeojects(updatedEditions);
  };
  return (
    <div className="pros-con">
      {/* Hoverable "Education" heading */}
      <h1>Projects</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>
          {projects.map((edu, index) => (
            <ProField
              key={index}
              data={edu}
              onDelete={() => handleDeleteEdition(index)}
            />
          ))}
        </div>

        <button className="add-btn" onClick={handleAddEdition}>
          +
        </button>
      </div>
    </div>
  );
};
export default Projects;

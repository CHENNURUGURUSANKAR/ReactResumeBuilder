import React, { useState } from "react";
import "./Ex.css";
import ExField from "./ExField";

const Experience = () => {
  const [editions, setEditions] = useState([
    { College: "", Degree: "", Duration: "", CGPA: "" },
  ]);

  const handleAddEdition = () => {
    setEditions([
      ...editions,
      { College: "", Degree: "", Duration: "", CGPA: "" },
    ]);
  };

  const handleDeleteEdition = (index) => {
    const updatedEditions = [...editions];
    updatedEditions.splice(index, 1);
    setEditions(updatedEditions);
  };

  return (
    <div className="education-container">
      {/* Hoverable "Education" heading */}
      <h1 className="education-heading">Experience</h1>
      <div style={{ display: "flex" }}>
        <div>
          {editions.map((edu, index) => (
            <ExField
              key={index}
              data={edu}
              onDelete={() => handleDeleteEdition(index)}
            />
          ))}
        </div>

        <button className="add-education-btn" onClick={handleAddEdition}>
          +
        </button>
      </div>
    </div>
  );
};

export default Experience;

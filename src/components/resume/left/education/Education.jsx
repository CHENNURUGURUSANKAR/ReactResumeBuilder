import React, { useState } from "react";
import "./Education.css";
import Field from "./Field";

const Education = () => {
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
      <h1 className="education-heading">Education</h1>
      <div style={{ display: "flex" }}>
        <div>
          {editions.map((edu, index) => (
            <Field
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

export default Education;

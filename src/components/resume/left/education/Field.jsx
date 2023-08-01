import React from "react";
import "./Field.css";
import TextareaAutosize from "react-textarea-autosize";
const Field = ({ data, handleChange }) => {
  return (
    <div>
      <TextareaAutosize
        className="college"
        placeholder="College"
        defaultvalue={data.College}
        type="text"
      />
      <TextareaAutosize
        type="text"
        className="course"
        placeholder="Degree"
        defaultvalue={data.Degree}
      />
      <TextareaAutosize
        type="text"
        className="duraton-cgpa"
        defaultvalue={data.Duration}
        placeholder="Duration"
      />
      <TextareaAutosize
        className="duraton-cgpa"
        type="text"
        placeholder="CGPA"
        defaultvalue={data.CGPA}
      />
    </div>
  );
};

export default Field;

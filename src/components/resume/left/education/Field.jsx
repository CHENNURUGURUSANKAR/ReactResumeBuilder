import React from "react";
import "./Field.css";
import TextareaAutosize from "react-textarea-autosize";
import EditableText from "../../EditableText";

const Field = ({ data, onDelete }) => {
  return (
    <div>
      <EditableText />
      {/* <TextareaAutosize
        className="college"
        placeholder="College"
        defaultValue={data.College}
        type="text"
      /> */}
      <TextareaAutosize
        type="text"
        className="course"
        placeholder="Degree"
        defaultValue={data.Degree}
      />
      <TextareaAutosize
        type="text"
        className="duraton-cgpa"
        defaultValue={data.Duration}
        placeholder="Duration"
      />
      <TextareaAutosize
        className="duraton-cgpa"
        type="text"
        placeholder="CGPA"
        defaultValue={data.CGPA}
      />
      <div className="add-edition-container">
        <button className="delete-education-btn" onClick={onDelete}>
          X
        </button>
      </div>
    </div>
  );
};

export default Field;

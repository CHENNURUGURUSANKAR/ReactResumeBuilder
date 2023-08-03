import React from "react";
import "./Field.css";
import TextareaAutosize from "react-textarea-autosize";
import ContentEditable from "react-contenteditable";
import EditableText from "../../EditableText";

const Field = ({ data, onDelete }) => {
  return (
    <div className="edu-con">
      <TextareaAutosize
        value={"College"}
        fontSize="20px"
        fontColor="black"
        className="college"
        placeholder="Start typing here..."
        style={{ fontFamily: "Arial, sans-serif" }}
      />
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
      <button className="delete-btn" onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default Field;

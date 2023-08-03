import React from "react";
import "./Ex.css";
import TextareaAutosize from "react-textarea-autosize";
import ContentEditable from "react-contenteditable";
import EditableText from "../../EditableText";

const ExField = ({ data, onDelete }) => {
  return (
    <div className="edu-con">
      <TextareaAutosize type="text" className="comp" placeholder="Company" />
      <TextareaAutosize type="text" className="job" placeholder="role" />
      <TextareaAutosize type="text" className="des" placeholder="Description" />
      <button className="delete-btn" onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default ExField;

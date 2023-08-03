import EditableText from "../../EditableText";
import React, { useState } from "react";
import "./ProField.css";

import TextareaAutosize from "react-textarea-autosize";
const ProField = ({ data, onDelete }) => {
  return (
    <div className="pro-field-con">
      <EditableText
        value={"Project name and Link "}
        className="project"
        placeholder="Start typing here..."
      />
      <TextareaAutosize
        type="text"
        className="comp"
        placeholder="Description"
      />
      <button className="delete-btn" onClick={onDelete}>
        X
      </button>
    </div>
  );
};

export default ProField;

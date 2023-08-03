import EditableText from "../../EditableText";
import "../../EditableText.css";
import React, { useState } from "react";
import "../education/Education.css";

const Links = ({ data, onDelete }) => {
  const [links, setLinks] = useState([{ Source: "", link: "" }]);

  const handleAddLink = () => {
    setLinks([...links, { Source: "", link: "" }]);
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  return (
    <div className="education-container">
      <h1>Links</h1>

      {links.map((link, index) => (
        <div key={index} className="editable">
          <EditableText
            value={"Source : name/Link "}
            fontSize="14px"
            fontColor="black"
            className="college"
            placeholder="Start typing here..."
            style={{ fontFamily: "Arial, sans-serif" }}
          />
          <div style={{ display: "flex" }}>
            <div className="add-edition-container">
              <button
                className="add-btn"
                onClick={() => handleDeleteLink(index)}
              >
                X
              </button>
            </div>
            <div className="add-education-container">
              <button className="add-btn" onClick={handleAddLink}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Links;

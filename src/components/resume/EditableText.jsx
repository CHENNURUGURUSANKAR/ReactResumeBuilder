import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import "./left/education/Field.css";
import "./EditableText.css";

const EditableText = () => {
  const [text, setText] = useState("College");
  const [selectedColor, setSelectedColor] = useState("black");
  const contentEditableRef = useRef(null);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const applyColorOrLink = () => {
    if (window.getSelection) {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const span = document.createElement("span");
        span.style.color = selectedColor;
        const isLink = selection.anchorNode.parentElement.tagName === "A";

        if (isLink) {
          const link = selection.anchorNode.parentElement;
          link.style.color = selectedColor;
        } else {
          const linkURL = prompt(
            "Enter the URL to link to (or leave blank for applying color):"
          );
          if (linkURL) {
            const externalLink = /^(https?:\/\/)/i.test(linkURL);
            const anchor = document.createElement("a");
            anchor.href = externalLink ? linkURL : `http://${linkURL}`;
            anchor.appendChild(range.extractContents());
            range.insertNode(anchor);
          } else {
            range.surroundContents(span);
          }
        }

        setSelectedColor("black"); // Reset selected color to black after applying
        selection.removeAllRanges(); // Clear the selection to avoid issues with consecutive color applications
      }
    }
  };

  return (
    <div className="add-education-container ">
      <div className="add-education-btn">
        <button
          onClick={() => handleColorChange("red")}
          style={{ background: "red", color: "red" }}
        >
          .
        </button>
        <button
          onClick={() => handleColorChange("blue")}
          style={{ background: "blue", color: "blue" }}
        >
          .
        </button>
        <button
          onClick={() => handleColorChange("green")}
          style={{ background: "green", color: "green" }}
        >
          .
        </button>
        {/* Add more color options as needed */}
      </div>
      <ContentEditable
        innerRef={contentEditableRef}
        html={text}
        tagName="div"
        className="college"
        placeholder="College"
        onChange={handleInputChange}
        onMouseUp={applyColorOrLink} // Use onMouseUp instead of onBlur
      />
    </div>
  );
};

export default EditableText;

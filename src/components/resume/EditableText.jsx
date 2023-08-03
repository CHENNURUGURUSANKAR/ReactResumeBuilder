import React, { useState, useRef } from "react";
import "./EditableText.css";

const EditableText = (props) => {
  const [text, setText] = useState(props.value);
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

        //setSelectedColor("black"); // Reset selected color to black after applying
        //selection.removeAllRanges(); // Clear the selection to avoid issues with consecutive color applications
      }
    }
  };

  return (
    <div className="editable">
      <button
        className="add-link-btn"
        onClick={() => handleColorChange("blue")}
        style={{ background: "blue", color: "white", padding: "5px" }}
      >
        Add Link
      </button>

      <div
        ref={contentEditableRef}
        contentEditable
        className={props.className}
        onInput={handleInputChange}
        onBlur={applyColorOrLink}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default EditableText;

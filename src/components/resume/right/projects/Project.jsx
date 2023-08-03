import ProField from "./ProField";
import React, { useState } from "react";
const Project = () => {
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
    <div style={{ display: "flex" }}>
      <ProField />
      <button>+</button>
    </div>
  );
};
export default Project;

import ContentEditable from "react-contenteditable";
import "../skills/Skill.css";
const Achiv = () => {
  return (
    <div>
      <h1>Skills</h1>
      <ContentEditable html={"Add all Skills Here"} className="skill" />
    </div>
  );
};
export default Achiv;

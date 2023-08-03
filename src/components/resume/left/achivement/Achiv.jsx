import ContentEditable from "react-contenteditable";
import "../skills/Skill.css";
const Achiv = () => {
  return (
    <div>
      <h1>Achivements</h1>
      <ContentEditable html={"Add all Achivements Here"} className="skill" />
    </div>
  );
};
export default Achiv;

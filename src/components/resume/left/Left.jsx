import Achiv from "./achivement/Achiv";
import Education from "./education/Education";
import Links from "./links/Links";

import Skill from "./skills/Skill";
const Left = () => {
  return (
    <div>
      <div>
        <Education />
        <Skill />
        <Achiv />
        <Links />
      </div>
    </div>
  );
};
export default Left;

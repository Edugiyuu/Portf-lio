import Skill from "./Skill"
import '../Styles/Skills.css'
const Skills = () => {
  return (
    <section id="skills" className="Skills">
      <Skill skillName="JavaScript" numberSkill={100} skillColor="rgb(255, 217, 0)"></Skill>
      <Skill skillName="TypeScript" numberSkill={250} skillColor="rgb(32, 109, 172)"></Skill>
      <Skill skillName="React" numberSkill={250} skillColor="#1d92ff"></Skill>
      <Skill skillName="Node" numberSkill={250} skillColor="#218d0b"></Skill>
    </section>
  )
}

export default Skills
import Skill from "./Skill"
import '../Styles/Skills.css'
const Skills = () => {
  return (
    <section id="skills">
      <h2 className="backgroundText">Skills</h2>
      <h1>Skills</h1>
      
      <div className="Skills">
      <Skill skillName="JavaScript" numberSkill={400} skillColor="rgb(255, 217, 0)"></Skill>
      <Skill skillName="TypeScript" numberSkill={350} skillColor="rgb(32, 109, 172)"></Skill>
      <Skill skillName="React" numberSkill={400} skillColor="#1d92ff"></Skill>
      <Skill skillName="Node" numberSkill={420} skillColor="#339424"></Skill>
      <Skill skillName="HTML" numberSkill={400} skillColor="#E3530A"></Skill>
      <Skill skillName="CSS" numberSkill={320} skillColor="#0CB0D4"></Skill>
      <Skill skillName="CSS" numberSkill={230} skillColor="#0CB0D4"></Skill>
      </div>
    </section>
  )
}

export default Skills
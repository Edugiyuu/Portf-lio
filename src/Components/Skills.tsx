import Skill from "./Skill"
import '../Styles/Skills.css'
const Skills = () => {
  return (
    <section id="skills">
      <h2 className="backgroundText">Skills</h2>
      <h1>Skills</h1>
      
      <div className="Skills">
      <Skill skillName="JavaScript" numberSkill={290} skillColor="#E3A404"></Skill>
      <Skill skillName="TypeScript" numberSkill={270} skillColor="rgb(32, 109, 172)"></Skill>
      <Skill skillName="React" numberSkill={240} skillColor="#1d92ff"></Skill>
      <Skill skillName="Node" numberSkill={280} skillColor="#339424"></Skill>
      <Skill skillName="HTML" numberSkill={340} skillColor="#E3530A"></Skill>
      <Skill skillName="CSS" numberSkill={310} skillColor="#0CB0D4"></Skill>
     
      </div>
    </section>
  )
}

export default Skills
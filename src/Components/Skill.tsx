import '../Styles/Skills.css'
interface Skill{
    skillName: string,
    numberSkill: number,
    skillColor: string
}

const Skill = ({ skillName, numberSkill,skillColor }:Skill) => {
    return (
        <div className='Skills'>
            <div className='JavaScriptSkill'>
                <h3>{skillName}</h3>
                <div className="BarOutJS" >
                    <div style={{width:`${numberSkill}px`, backgroundColor:`${skillColor}`}} className='BarInJS'></div>
                </div>
            </div>
        </div>
    )
}

export default Skill
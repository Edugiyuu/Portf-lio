import '../Styles/Skills.css'

interface Skill {
    skillName: string,
    numberSkill: number,
    skillColor: string
}

const Skill = ({ skillName, numberSkill, skillColor }: Skill) => { 
    return (
        <div className='Skills'>
            <div>
                <h3 className='skillName'>{skillName}</h3>
                <div className="BarOutJS">
                    <div style={{ width: `${numberSkill}px`, backgroundColor: `${skillColor}` }} className='BarInJS'>
                        {`${Math.round((numberSkill / 350) * 100)}%`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
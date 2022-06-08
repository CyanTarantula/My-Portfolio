import './skill.css'

import htmlImg from '../assets/SkillImages/HTML5.png'
import cssImg from '../assets/SkillImages/CSS3.png'
import djangoImg from '../assets/SkillImages/django-logo.png'
import jsImg from '../assets/SkillImages/js.png'
import reactImg from '../assets/SkillImages/React.png'

function Skill(props) {
    return (
        <div className='Skill'>
            <div className='SkillImg'>
                <img src={props.imgFile} alt="Logo for skill"></img>
            </div>
            <div className='SkillName'>{props.skillName}</div>
        </div>
    )
}

function Skills() {
    return (
        <div id="Skills" className='Skills'>
            <div className='skill-title'>
                Skills
            </div>
            <div className='skill-section'>
                <Skill skillName="HTML" imgFile={htmlImg} />
                <Skill skillName="CSS" imgFile={cssImg} />
                <Skill skillName="React" imgFile={reactImg} />
                <Skill skillName="Django" imgFile={djangoImg} />
                <Skill skillName="JavaScript" imgFile={jsImg} />
            </div>
        </div>
    )
}

export default Skills;
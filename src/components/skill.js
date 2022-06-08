import './skill.css'

import pythonImg from '../assets/SkillImages/python-compressed.png'
import cppImg from '../assets/SkillImages/cpp-compressed.png'
import reactImg from '../assets/SkillImages/React-compressed.png'
import djangoImg from '../assets/SkillImages/django-logo-compressed.png'
import htmlImg from '../assets/SkillImages/HTML5-compressed.png'
import cssImg from '../assets/SkillImages/CSS3-compressed.png'
import jsImg from '../assets/SkillImages/js-compressed.png'

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
                <Skill skillName="Python" imgFile={pythonImg} />
                <Skill skillName="C++" imgFile={cppImg} />
                <Skill skillName="React" imgFile={reactImg} />
                <Skill skillName="Django" imgFile={djangoImg} />
                <Skill skillName="HTML" imgFile={htmlImg} />
                <Skill skillName="CSS" imgFile={cssImg} />
                <Skill skillName="JavaScript" imgFile={jsImg} />
            </div>
        </div>
    )
}

export default Skills;
import './Maincontent.css'
import Intro from './MaincontentComponents/intro';
import Skill from './MaincontentComponents/skill';

function Maincontent() {
    return (
        <div className='Maincontent'>
            <Intro />
            <Skill />
        </div>
    )
}

export default Maincontent;
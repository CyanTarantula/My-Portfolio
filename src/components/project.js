import './project.css'

import WebsiteImg from '../assets/Images/website.png'
import defaultProjectImg from '../assets/NavbarImages/project.png'

function getProjectButton(props) {
    if (props.download === true) {
        return (
            <div className='project-button'>
                <a href={props.projectLink} download>
                    <div className='project-button-download'>
                        Download
                    </div>
                </a>
            </div>
        )
    }
    else {
        // console.log(props.projectLink)
        return (
            <div className='project-button'>
                <a href={props.projectLink}>
                    <div className='project-button-link'>
                        <img src={WebsiteImg} alt='' />
                        <div>Website</div>
                    </div>
                </a>
            </div>
        )
    }
}

function getProjectImage(props) {
    if (props.projectImg !== undefined) {
        return (
            <img src={props.projectImg} alt='Project Logo' />
        )
    }
    else {
        return (
            <img src={defaultProjectImg} alt='Project Logo' style={{
                backgroundColor: "#C5C6C7",
                borderRadius: "50%",
            }} />
        )
    }
}

function Project(props) {
    return (
        <div className='project'>
            <div>
                <div className='project-img-title'>
                    <div className='project-title'>
                        {props.projectTitle}
                    </div>
                    <div className='project-img'>
                        {getProjectImage(props)}
                    </div>
                </div>
                <div className='project-btn-responsive'>
                    {getProjectButton(props)}
                </div>
            </div>
            <div className='project-description-button'>
                <div className='project-description'>
                    <div className='project-description-title'>
                        Description
                    </div>
                    <div className='project-description-content'>
                        {props.projectDescription}
                    </div>
                </div>
                {getProjectButton(props)}
            </div>
        </div>
    )
}

export default Project
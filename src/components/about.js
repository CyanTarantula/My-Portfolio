import './about.css'

function About() {
    return (
        <div className="about">
            {/* <img src={require('../assets/Images/Linkedin_PFP_Square.jpg')} alt="My beautiful face" id="myImage"></img> */}
            {/* <div className='gradient-my-image'></div> */}
            <div className='left-section'>
                <div className='left-top-section'>
                    <div className='about-heading'>
                        About Me
                    </div>
                </div>
                <div className='left-mid-section'>
                    <div className="about-content">
                        I am a student at Indian Institute of Technology Jodhpur 
                        and currently pursuing my B.Tech in Artificial Intelligence and Data Science.
                    </div>
                    <div className='about-resume'>
                        <a href="https://drive.google.com/file/d/1r2um31IpmQmaBr1p-NkbE7ywfAoqhuEK/view?usp=sharing" target='_blank' rel='noopener noreferrer'>Checkout my resume</a>
                    </div>
                </div>
                <div className='left-bottom-section'>
                    <div className='about-contacts'>
                        <a href='https://www.linkedin.com/in/yashbhargava02/' target='_blank' rel='noopener noreferrer' className='fa fa-linkedin'> </a>
                        <a href='https://github.com/CyanTarantula' target='_blank' rel='noopener noreferrer' className='fa fa-github'> </a>
                        <a href='mailto:yasbh2002@gmail.com' target='_blank' rel='noopener noreferrer' className='fa fa-solid fa-envelope'> </a>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                <div className='my-image'>
                </div>
            </div>
        </div>
    )
}

export default About
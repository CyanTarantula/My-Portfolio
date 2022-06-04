import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='social-media-links'>
                <a href='https://www.linkedin.com/in/yashbhargava02/' target='_blank' rel='noopener noreferrer' className='fa fa-facebook'> </a>
                <a href='https://github.com/CyanTarantula' target='_blank' rel='noopener noreferrer' className='fa fa-instagram'> </a>
            </div>

            <div className='contact-title-mail'>
                <div className='contact-title'>
                    Contact Me
                </div>
                <div className='contact-mail'>
                    <a href='mailto:yasbh2002@gmail.com' target='_blank' rel='noopener noreferrer'>
                        yasbh2002@gmail.com
                    </a>                    
                </div>
            </div>

            <div className='contact-footer'>
                Copyright ©2022 All rights reserved | Made with React
            </div>
        </div>
    )
}

export default Contact
import './intro.css'
import profileImg from '../../assets/Images/Linkedin_PFP_Square.jpg';

function Intro() {
	return (
		<div className='introBox'>
			<div className='introFlex'>
				<div className='greeting'>
				Hi There!
				</div> 
				<div className='intro'>
					I am <span id="myName">Yash Bhargava</span>
				</div>
			</div>
			<div className='profileImage'>
				<img id="profImg" src={profileImg} alt="My beautiful face"></img>
			</div>
		</div>
	)
}

export default Intro;
import './Navbar.css'

import homeIcon from '../assets/NavbarImages/home.png'
import skillIcon from '../assets/NavbarImages/skills.png'
import projectIcon from '../assets/NavbarImages/project.png'
import contactIcon from '../assets/NavbarImages/Contact.png'

function NavbarBtn(props) {
	return (
		<li 
			className='NavBtn'
			onClick={() => {
				const anchor = document.querySelector(props.link)
				anchor.scrollIntoView({
					behaviour: "smooth",
					block: 'center'
				})
			}}
		>
			<img src={props.icon} alt={props.buttonName}></img> 
			<div>{props.buttonName}</div>
		</li>
		// <li className='NavBtn'>{props.buttonName}</li>
	)
}

function Navbar() {
	return (
		<div id="Navbar">
			<ul>
				<NavbarBtn buttonName="Home" link="#Title" icon={homeIcon} />
				<NavbarBtn buttonName="Skills" link="#Skills" icon={skillIcon} />
				<NavbarBtn buttonName="Projects" link="#Projects" icon={projectIcon} />
				<NavbarBtn buttonName="Contact" link="#Contact" icon={contactIcon} />
			</ul>
		</div>
	)
}

export default Navbar;
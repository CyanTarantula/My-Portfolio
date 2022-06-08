import './navbar.css'

import homeIcon from '../assets/NavbarImages/home-compressed.png'
import aboutIcon from '../assets/NavbarImages/About-compressed.png'
import skillIcon from '../assets/NavbarImages/skills-compressed.png'
import projectIcon from '../assets/NavbarImages/project-compressed.png'
import contactIcon from '../assets/NavbarImages/Contact-compressed.png'

// interface ButtonProps {
// 	doSomething: (params: any) => any;
// }

function NavbarBtn(props) {
	return (
		<li 
			className='NavBtn'
			onClick={props.onCl}
			// onClick={() => {
				// const anchor = document.querySelector(props.link)
				// anchor.scrollIntoView({
				// 	behaviour: "smooth",
				// 	block: 'center'
				// })
			// }}
		>
			<img src={props.icon} alt={props.buttonName}></img> 
			<div className="NavbarBtnName">{props.buttonName}</div>
		</li>
	)
}

function Navbar(props) {
	return (
		<div id="Navbar">
			<ul>
				{/* <NavbarBtn buttonName="Home" link=".intro" icon={homeIcon} /> */}
				{/* <NavbarBtn buttonName="Skills" link="#Skills" icon={skillIcon} /> */}
				{/* <NavbarBtn buttonName="Projects" link="#Projects" icon={projectIcon} /> */}
				{/* <NavbarBtn buttonName="Contact" link="#Contact" icon={contactIcon} /> */}
				<NavbarBtn buttonName="Home" onCl={props.onCl[0]} icon={homeIcon} />
				<NavbarBtn buttonName="About" onCl={props.onCl[1]} icon={aboutIcon} />
				<NavbarBtn buttonName="Skills" onCl={props.onCl[2]} icon={skillIcon} />
				<NavbarBtn buttonName="Projects" onCl={props.onCl[3]} icon={projectIcon} />
				<NavbarBtn buttonName="Contact" onCl={props.onCl[4]} icon={contactIcon} />
			</ul>
		</div>
	)
}

export default Navbar;
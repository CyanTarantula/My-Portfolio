import './App.css';

import { useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Navbar from './components/navbar.js';

import Intro from './components/intro.js';
import About from './components/about.js';
import Skills from './components/skill.js';
import Project from './components/project.js';
import Contact from './components/contact.js';

import TitaniumVaultImg from './assets/ProjectImages/Titanium_Vault_Icon.ico'
import TitaniumVaultFile from './assets/ProjectFiles/Titanium Vault v1.1 (By Yash Bhargava).zip'

import HangmanGameImg from './assets/ProjectImages/Hangman_Game_Icon2.png'
import HangmanGameFile from './assets/ProjectFiles/Hangman Game v1.2 (By Yash Bhargava).zip'

import spaceBg1 from './assets/Images/space1.png'
import spaceBg2 from './assets/Images/space2.png'
import contactBg from './assets/Images/contact2.jpg'

const homePageTop = 0, 
	aboutPageTop = 0.58, 
	skillsPageTop = 1.25, 
	projectPageTop = 2, 
	contactPageTop = 1;

function scrollStopper(e) {
	e.preventDefault(); 
	e.stopPropagation(); 
	return false;
}

function holdTopVert(e) {
	console.log('holding top vert')
	e.preventDefault()
	// e.stopPropagation()
	// return false;

	// const topEle = document.querySelector('.initial-vertical-scroll')
	// topEle.scrollTop = topEle.scrollHeight - window.innerHeight
}

function onlyOverall(e) {
	console.log('Allowing scroll on only overall div')
	e.stopPropagation()
}

function vScrollStop(e) {
	// console.log('vScrollStop');
	var ele = document.querySelector('.initial-vertical-scroll')
	console.log("Scrolled: ", window.innerHeight + ele.scrollTop)
	if (window.innerHeight + ele.scrollTop >= ele.scrollHeight) {
		console.log('Reached end');
		document.querySelector('.mid-horizontal-scroll').addEventListener('wheel', scrollHorizontally, {passive: false})
		e.preventDefault(); 
		e.stopPropagation(); 
		return false;
	}
	// else {
	// 	document.querySelector('.mid-horizontal-scroll').removeEventListener('wheel', scrollHorizontally, {passive: true})
	// }
}

async function stopScroll(e) {
	const pageTop = 0;
	document.querySelector('.overall-vertical-scroll').scrollTop = pageTop;
};

async function resumeScroll() {
	// document.querySelector('body').removeEventListener('wheel', scrollStopper, {passive: true})
	document.querySelector('body').removeEventListener('wheel', vScrollStop, {passive: true})
	document.querySelector('.mid-horizontal-scroll').removeEventListener('wheel', scrollHorizontally, {passive: true})

	// document.querySelector('body').classList.toggle('disable-scroll')
}

function scrollHorizontally(e) {
	const topEle = document.querySelector('.initial-vertical-scroll')
	const midEle = document.querySelector('.mid-horizontal-scroll')
	const overallEle = document.querySelector('.overall-vertical-scroll')

	e = window.event || e;
	
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	// console.log("Delta: ", delta)

	e.preventDefault();

	// console.log("Delta: ", delta)
	
	if (midEle.scrollLeft === 0 && delta > 0) {
		// console.log("Back to about")
		topEle.removeEventListener('wheel', scrollStopper, {passive: false})
		midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
		
		topEle.style.overflowY = 'visible'
		// overallEle.removeEventListener('wheel', stopScroll, {passive: false})

		// document.querySelector('.App').removeEventListener('wheel', onlyOverall, {passive: false})

		// midEle.scrollTop -= (delta * 100);
	}
	else if (window.innerWidth + midEle.scrollLeft >= midEle.scrollWidth && delta < 0) {
		// midEle.scrollLeft -= (delta * 100);
		// console.log("Reached end of projects")

		topEle.classList.remove('toggleOverallScroll')
		topEle.style.overflowY = 'hidden'

		topEle.removeEventListener('wheel', scrollStopper, {passive: false})
		midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})

		// topEle.addEventListener('wheel', holdTopVert, {passive: false})
		// midEle.addEventListener('wheel', holdTopVert, {passive: false})
		// overallEle.addEventListener('wheel', onlyOverall, {passive: false})

		// document.querySelector('.App').addEventListener('wheel', onlyOverall, {passive: false})
	}
	else {
		var val = (window.innerWidth) / 10;
		midEle.scrollLeft -= (delta * val);
		// console.log("Scrolling through projects")
	}
}

var lastY;

async function initVerRefOnWheel(e) {
	const topEle = document.querySelector('.initial-vertical-scroll')
	const midEle = document.querySelector('.mid-horizontal-scroll')
	const overallEle = document.querySelector('.overall-vertical-scroll')
	
	// console.log("Event: ", e)
	// console.log(delta)

	if (window.matchMedia("(hover: hover)").matches) {
		e = window.event || e;
		
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		// When scrolling down to projects from skills
		if (
			(topEle.scrollTop + window.innerHeight >= topEle.scrollHeight) 
			&& (midEle.scrollLeft === 0) 
			&& (delta < 0)
		) {
			// console.log("scrolling down to projects from skills")
			topEle.addEventListener('wheel', scrollStopper, {passive: false})
			midEle.addEventListener('wheel', scrollHorizontally, {passive: false})
			topEle.classList.add('toggleOverallScroll')
		}

		// When scrolling to end of projects and scrolling downwards
		if (
			(topEle.scrollTop + window.innerHeight >= topEle.scrollHeight) 
			&& (overallEle.scrollTop === 0)
			&& (window.innerWidth + midEle.scrollLeft >= midEle.scrollWidth) 
			&& (delta < 0)
		) {
			// console.log("scrolling to end of projects and scrolling downwards")
			// midEle.scrollLeft -= (delta * 100);
			topEle.classList.remove('toggleOverallScroll')
			topEle.style.overflowY = 'hidden'

			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})

			// topEle.addEventListener('wheel', holdTopVert, {passive: false})
			// midEle.addEventListener('wheel', holdTopVert, {passive: false})

			// overallEle.addEventListener('wheel', onlyOverall, {passive: false})

			// div.addEventListener('wheel', onlyOverall, true)
		}

		// When scrolling up to projects from contact
		if (
			(topEle.scrollTop + window.innerHeight >= topEle.scrollHeight) 
			&& (overallEle.scrollTop === 0)
			&& (window.innerWidth + midEle.scrollLeft >= midEle.scrollWidth) 
			&& (delta > 0)
		) {
			// console.log("scrolling up to projects from contact")
			// topEle.removeEventListener('wheel', holdTopVert, {passive: false})
			// midEle.removeEventListener('wheel', holdTopVert, {passive: false})

			// overallEle.removeEventListener('wheel', onlyOverall, {passive: false})
			// div.removeEventListener('wheel', onlyOverall, true)

			topEle.addEventListener('wheel', scrollStopper, {passive: false})
			midEle.addEventListener('wheel', scrollHorizontally, {passive: false})
			topEle.classList.add('toggleOverallScroll')
		}

		// When scolling to beginning of projects and scrolling upwards
		if (
			(topEle.scrollTop + window.innerHeight >= topEle.scrollHeight) 
			&& (midEle.scrollLeft === 0) 
			&& (delta > 0)
		) {
			// console.log("scolling to beginning of projects and scrolling upwards")
			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})

			// topEle.classList.remove('toggleInitialScroll')
			topEle.style.overflowY = 'visible'
		}
	}
	else {
		console.log("topEle.scrollTop: ", topEle.scrollTop, " window.innerHeight: ", window.innerHeight, " topEle.scrollHeight: ", topEle.scrollHeight)
		var currentY = e.touches[0].clientY
		console.log("CurrentY: ", currentY, " ", currentY < lastY)
		if (Math.ceil(topEle.scrollTop + window.innerHeight) >= Math.floor(topEle.scrollHeight) && currentY < lastY) {
			topEle.style.overflowY = 'hidden'
			console.log("Reached projects from skills")
		}
		else if (
			Math.ceil(topEle.scrollTop + window.innerHeight) >= Math.floor(topEle.scrollHeight)
			&& currentY > lastY
			&& overallEle.scrollTop === 0
		) {
			topEle.style.overflowY = 'visible'
			console.log("Reached projects from contact")
		}
		lastY = currentY
	}
}

// function topSectionOnWheel(e) {

// }

function App() {
	const init_ver_ref = useRef()
	const mid_hor_ref = useRef()	
	const overall_ver_ref = useRef()

	let currentSection = 0;
	let currentProject = 0, numOfProjects = 3;

	const scrollToSection = async (to) => {
		const topEle = document.querySelector('.initial-vertical-scroll')
		const midEle = document.querySelector('.mid-horizontal-scroll')
		const overallEle = document.querySelector('.overall-vertical-scroll')

		if (to !== contactPageTop && init_ver_ref.current) {
			if (currentSection === contactPageTop) {
				overall_ver_ref.current.scrollTo(0)
				scrollToProject(0)

				// New
				if (to === projectPageTop) {
					topEle.addEventListener('wheel', scrollStopper, {passive: false})
					midEle.addEventListener('wheel', scrollHorizontally, {passive: false})
					topEle.classList.add('toggleOverallScroll')
				}
				else {
					topEle.removeEventListener('wheel', scrollStopper, {passive: false})
					midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
	
					// topEle.classList.remove('toggleInitialScroll')
					topEle.style.overflowY = 'visible'
				}
			}
			else if (currentSection === projectPageTop) {
				scrollToProject(0)
				
				// New
				topEle.removeEventListener('wheel', scrollStopper, {passive: false})
				midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})

				// topEle.classList.remove('toggleInitialScroll')
				topEle.style.overflowY = 'visible'
			}
			else {
				// New
				if (to === projectPageTop) {
					topEle.addEventListener('wheel', scrollStopper, {passive: false})
					midEle.addEventListener('wheel', scrollHorizontally, {passive: false})
					topEle.classList.add('toggleOverallScroll')
				}
			}
			init_ver_ref.current.scrollTo(to)
			currentSection = to;
		}
		if (to === contactPageTop && overall_ver_ref.current) {
			init_ver_ref.current.scrollTo(projectPageTop)
			scrollToProject(numOfProjects-1)
			overall_ver_ref.current.scrollTo(to)
			currentSection = to;

			// New
			topEle.classList.remove('toggleOverallScroll')
			topEle.style.overflowY = 'hidden'
	
			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
		}
	}

	const scrollToProject = async (to) => {
		if (mid_hor_ref.current) {
			if (to === "left") {
				currentProject = (currentProject - 1 + numOfProjects) % numOfProjects
			}
			else if (isNaN(to)) {
				// console.log("Scrolling to next project, current project: ", currentProject)
				currentProject = (currentProject + 1) % numOfProjects
				// console.log("Scrolled to project: ", currentProject)
			}
			else {
				// console.log("Scrolling to project ", to+1)
				currentProject = to
			}
			// console.log(currentProject)
			mid_hor_ref.current.scrollTo(currentProject)
		}
	}
	
	const scroll = async (to) => {
		// console.log("Scrolling to ", to)
		scrollToSection(to);

		var topEle = document.querySelector('.initial-vertical-scroll')
		var midEle = document.querySelector('.mid-horizontal-scroll')

		if (to === contactPageTop) {
			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
		}
		else if (to !== projectPageTop) {
			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
		}
		else {
		}
	}

	const innerRef = useRef()

	useEffect(() => {
		const div = innerRef.current
		if (window.matchMedia("(hover: hover)").matches) {
			div.addEventListener('wheel', initVerRefOnWheel, {passive: false})
		}
		else {
			console.log("Touch device detected")
			div.addEventListener('touchmove', initVerRefOnWheel, {passive: true})
		}

		return () => {
			if (window.matchMedia("(hover: hover)").matches) {
				div.removeEventListener('wheel', initVerRefOnWheel, {passive: false})
			}
			else {
				div.removeEventListener('touchmove', initVerRefOnWheel, {passive: true})
			}
		}
	})
	
	return (
		<div className='App' style={{background: '#0B0C10'}}
			ref={innerRef}
			onWheel={(e) => {
				console.log("Scroll detected on overall div")
			}}
		>
			<Navbar 
			onCl={[
				() => {scroll(homePageTop)}, 
				() => {scroll(aboutPageTop)}, 
				() => {scroll(skillsPageTop)}, 
				() => {scroll(projectPageTop)},
				() => {scroll(contactPageTop)},
			]} />

			<Parallax
				pages={2}
				className="overall-vertical-scroll"
				ref={overall_ver_ref}
			>
				<ParallaxLayer
					offset={0}
				>
					<Parallax 
						className='initial-vertical-scroll toggleOverallScroll' 
						// pages={3.834} 
						pages={3}
						ref={init_ver_ref}
						// onClick={() => {
						// 	console.log("Vertical Scroll: ", document.querySelector('.initial-vertical-scroll').scrollTop)
						// 	console.log("Horizontal Scroll: ", document.querySelector('.mid-horizontal-scroll').scrollLeft)
						// }}
					>
						{/* Intro */}
						<ParallaxLayer 
						offset={0}
						speed={1}
						factor={0.9}
						style={{
							// backgroundColor: 'white',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							// // paddingTop: '40vh',
							// justifyContent: 'center',
						}}
						>
							<Intro />
						</ParallaxLayer>
						
						{/* About - Profile picture */}
						<ParallaxLayer
							offset={0.99}
							speed={0.69}
							factor={1}
						>
							<img src={require('./assets/Images/Linkedin_PFP_Square.jpg')} alt="My beautiful face" id="myImage"></img>
							<div className='gradient-my-image'></div>
						</ParallaxLayer>

						{/* About */}
						<ParallaxLayer 
							offset={0.9}
							speed={0.55}
							factor={1} 
							style={{
								// backgroundColor: 'white',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								// paddingTop: '40vh',
								justifyContent: 'center',
							}}
						>
							<About />
						</ParallaxLayer>
						
						{/* Skills */}
						<ParallaxLayer 
							offset={1.5}
							speed={1}
							factor={1}
							style={{
								// backgroundColor: 'white',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								// paddingTop: '40vh',
								justifyContent: 'center',
							}}
						>
							<Skills />
						</ParallaxLayer>
						
						{/* Projects */}
						<ParallaxLayer
							offset={2}
							speed={0.35}
							style={{
								// backgroundColor: 'white',
							}}
						>
							<Parallax 
								className='mid-horizontal-scroll' 
								horizontal={true} 
								pages={3}
								style={{
									// overflow: 'hidden',
								}}
								ref={mid_hor_ref}
							>
								{/* Section Heading */}
								<ParallaxLayer
									className='project-section-heading'
									sticky={{start: 0, end: numOfProjects}}
									style={{
										color: '#66fcf1',
										// color: '#0b0c10',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										height: '20vh',
									}}
								>
									<div 
									style={{
										fontSize: '6vmin',
										fontWeight: 'bold',
									}}>
										Projects
									</div>
								</ParallaxLayer>
								
								{/* Project navigation arrows */}
								<ParallaxLayer
									sticky={{start: 0, end: numOfProjects}}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-end',
										height: '100vh',
										width: '100vw',
										pointerEvents: 'none',
										// marginLeft: 'auto',
									}}
								>
									<div 
										className='project-nav-arrows'
										onClick={scrollToProject}
									>
										<div className='arrow right'></div>
									</div>
								</ParallaxLayer>
								

								{/* Project navigation arrows */}
								<ParallaxLayer
									sticky={{start: 0, end: numOfProjects}}
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-start',
										height: '100vh',
										width: '100vw',
										pointerEvents: 'none',
										// marginLeft: 'auto',
									}}
								>
									<div 
										className='project-nav-arrows'
										onClick={() => {scrollToProject('left')}}
									>
										<div className='arrow left'></div>
									</div>
								</ParallaxLayer>

									{/* Projects */}
								<ParallaxLayer
									offset={0}
									speed={0.2}
								>
									<Project 
										projectTitle="Fruits 360"
										projectLink={'https://fruits-360.herokuapp.com/'}
										projectDescription="The website demonstrates a CNN model predicting the image of a fruit taken from any angle. The model is trained on the Kaggle Fruits 360 Dataset. The website is built with React and Flask."
									/>
								</ParallaxLayer>

								<ParallaxLayer
									offset={1}
									speed={0.2}
								>
									<Project 
										projectTitle="Titanium Vault"
										projectImg={TitaniumVaultImg}
										projectLink={TitaniumVaultFile}
										projectDescription="Offline password manager with CRUD functionalities. Applied concepts of encryption and hashing to create a safe password storage solution."
										download={true}
									/>
								</ParallaxLayer>

								<ParallaxLayer
									offset={2}
									speed={0.2}
								>
									<Project 
										projectTitle="Hangman Game"
										projectImg={HangmanGameImg}
										projectLink={HangmanGameFile}
										projectDescription="The classic hangman game made completely in Python. The game involves guessing movie names with the help of hints given in-game."
										download={true}
									/>
								</ParallaxLayer>

									{/* Project Background */}
								<ParallaxLayer 
									offset={0}
									speed={0}
									factor={4.3}
									style={{
										// backgroundImage: `url(https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
										// backgroundSize: 'cover',

										// backgroundImage: `url(https://img.freepik.com/free-vector/dark-realistic-modern-striped-black-texture-futuristic-background-template-with-striped-line_535749-1439.jpg?size=626&ext=jpg)`,
										// backgroundSize: '100vw 100vh',
										// backgroundRepeat: 'repeat-x',
										
										backgroundImage: 
											`linear-gradient(
											rgba(11, 12, 16, 0.3), 
											rgba(11, 12, 16, 0.3)
											),`
											+
											`url(${spaceBg2})`,
										backgroundRepeat: 'repeat',

										zIndex: '-1',
									}}
								/>
							</Parallax>
						</ParallaxLayer>

						{/* Top Background */}
						<ParallaxLayer 
							offset={0}
							speed={0.1}
							// factor={2.199}
							factor={2.5}
							style={{
								// backgroundImage: `url(https://i.pinimg.com/originals/21/5c/7f/215c7fdca6033092baa04b35c17466bd.gif)`,
								// backgroundSize: '100vw',
								// backgroundImage: `url(https://img.freepik.com/free-vector/color-seamless-space-pattern_102902-2360.jpg?t=st=1654369142~exp=1654369742~hmac=74dc7c66451ab64d5a46dfa1509336a1fe56d6b51620dbc97dd4f4de3052c5bb&w=900)`,
								// backgroundRepeat: 'repeat-y',
								backgroundImage: 
									`linear-gradient(
									rgba(11, 12, 16, 0.5), 
									rgba(11, 12, 16, 0.5)
									),`
									+
									`url(${spaceBg1})`,
								backgroundRepeat: 'repeat',
								// backgroundSize: '100vw',
								zIndex: '-1',
							}}
						/>
					</Parallax>
				</ParallaxLayer>
					
				{/* Contact */}
				<ParallaxLayer
					className='end-section'
					// offset={2.999}
					offset={1} 
					speed={0.2}
					factor={1}
					style={{
						// backgroundColor: 'grey',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						// paddingTop: '40vh',
						justifyContent: 'center',
					}}
				>
					<Contact />
				</ParallaxLayer>

				{/* Contact Background */}
				<ParallaxLayer 
					offset={1}
					factor={1}
					style={{
						// backgroundImage: `url(https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
						// backgroundSize: 'cover',
						
						backgroundImage: `
							linear-gradient(
							rgba(11, 12, 16, 0.7), 
							rgba(11, 12, 16, 0.7)
							),url(${contactBg})`,
						backgroundRepeat: 'repeat',
						zIndex: '-1',
					}}
				/>
			</Parallax>



		</div>
	);
}

export default App;

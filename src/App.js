import './App.css';

import { useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Navbar from './components/navbar.js';

import Intro from './components/intro.js';
import About from './components/about.js';
import Skills from './components/skill.js';
import Project from './components/project.js';
import Contact from './components/contact.js';

import TitaniumVaultImg from './assets/ProjectImages/Titanium_Vault_Logo-compressed.jpg'
import TitaniumVaultFile from './assets/ProjectFiles/Titanium Vault v1.1 (By Yash Bhargava).zip'

import HangmanGameImg from './assets/ProjectImages/Hangman_Game_Icon2-compressed.png'
import HangmanGameFile from './assets/ProjectFiles/Hangman Game v1.2 (By Yash Bhargava).zip'

import KorporiaImg from './assets/ProjectImages/KorporiaLogo-compressed.jpg'

import spaceBg1 from './assets/Images/space1-compressed.png'
import spaceBg2 from './assets/Images/space2-compressed.png'
import contactBg from './assets/Images/contact2-compressed.jpg'

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

function scrollHorizontally(e) {
	const topEle = document.querySelector('.initial-vertical-scroll')
	const midEle = document.querySelector('.mid-horizontal-scroll')

	e = window.event || e;
	
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	e.preventDefault();
	
	if (midEle.scrollLeft === 0 && delta > 0) {
		topEle.removeEventListener('wheel', scrollStopper, {passive: false})
		midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
		
		topEle.style.overflowY = 'visible'
	}
	else if (window.innerWidth + midEle.scrollLeft >= midEle.scrollWidth && delta < 0) {
		topEle.classList.remove('toggleOverallScroll')
		topEle.style.overflowY = 'hidden'

		topEle.removeEventListener('wheel', scrollStopper, {passive: false})
		midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
	}
	else {
		var val = (window.innerWidth) / 10;
		midEle.scrollLeft -= (delta * val);
	}
}

var lastY;

async function initVerRefOnWheel(e) {
	const topEle = document.querySelector('.initial-vertical-scroll')
	const midEle = document.querySelector('.mid-horizontal-scroll')
	const overallEle = document.querySelector('.overall-vertical-scroll')

	if (window.matchMedia("(hover: hover)").matches) {
		e = window.event || e;
		
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		// When scrolling down to projects from skills
		if (
			(topEle.scrollTop + window.innerHeight >= topEle.scrollHeight) 
			&& (midEle.scrollLeft === 0) 
			&& (delta < 0)
		) {
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
			topEle.classList.remove('toggleOverallScroll')
			topEle.style.overflowY = 'hidden'

			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})
		}

		// When scrolling up to projects from contact
		if (
			(topEle.scrollTop + window.innerHeight >= topEle.scrollHeight) 
			&& (overallEle.scrollTop === 0)
			&& (window.innerWidth + midEle.scrollLeft >= midEle.scrollWidth) 
			&& (delta > 0)
		) {
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
			topEle.removeEventListener('wheel', scrollStopper, {passive: false})
			midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})

			topEle.style.overflowY = 'visible'
		}
	}
	else {
		var currentY = e.touches[0].clientY
		if (Math.ceil(topEle.scrollTop + window.innerHeight) >= Math.floor(topEle.scrollHeight) && currentY < lastY) {
			topEle.style.overflowY = 'hidden'
		}
		else if (
			Math.ceil(topEle.scrollTop + window.innerHeight) >= Math.floor(topEle.scrollHeight)
			&& currentY > lastY
			&& overallEle.scrollTop === 0
		) {
			topEle.style.overflowY = 'visible'
		}
		lastY = currentY
	}
}

function App() {
	const init_ver_ref = useRef()
	const mid_hor_ref = useRef()	
	const overall_ver_ref = useRef()

	let currentSection = 0;
	let currentProject = 0, numOfProjects = 4;

	const scrollToSection = async (to) => {
		const topEle = document.querySelector('.initial-vertical-scroll')
		const midEle = document.querySelector('.mid-horizontal-scroll')

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

					topEle.style.overflowY = 'visible'
				}
			}
			else if (currentSection === projectPageTop) {
				scrollToProject(0)
				
				// New
				topEle.removeEventListener('wheel', scrollStopper, {passive: false})
				midEle.removeEventListener('wheel', scrollHorizontally, {passive: false})

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
				currentProject = (currentProject + 1) % numOfProjects
			}
			else {
				currentProject = to
			}
			mid_hor_ref.current.scrollTo(currentProject)
		}
	}
	
	const scroll = async (to) => {
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
	}

	const innerRef = useRef()

	useEffect(() => {
		const div = innerRef.current
		if (window.matchMedia("(hover: hover)").matches) {
			div.addEventListener('wheel', initVerRefOnWheel, {passive: false})
		}
		else {
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
						pages={3}
						ref={init_ver_ref}
					>
						{/* Intro */}
						<ParallaxLayer 
						offset={0}
						speed={1}
						factor={0.9}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
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
							<img src={require('./assets/Images/Linkedin_PFP_Square_1-compressed.jpg')} alt="My beautiful face" id="myImage"></img>
							<div className='gradient-my-image'></div>
						</ParallaxLayer>

						{/* About */}
						<ParallaxLayer 
							offset={0.9}
							speed={0.55}
							factor={1} 
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
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
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Skills />
						</ParallaxLayer>
						
						{/* Projects */}
						<ParallaxLayer
							offset={2}
							speed={0.35}
						>
							<Parallax 
								className='mid-horizontal-scroll' 
								horizontal={true} 
								pages={numOfProjects}
								ref={mid_hor_ref}
							>
								{/* Section Heading */}
								<ParallaxLayer
									className='project-section-heading'
									sticky={{start: 0, end: numOfProjects}}
									style={{
										color: '#66fcf1',
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
										projectTitle="Korporia"
										projectImg={KorporiaImg}
										projectLink={'https://github.com/CyanTarantula/KORPORIA'}
										projectDescription="A food ordering application with the aim to integrate the small business owners into
										the system and help them interact with their clients on a one on one basis. The website is built with React and Django."
									/>
								</ParallaxLayer>

								<ParallaxLayer
									offset={1}
									speed={0.2}
								>
									<Project 
										projectTitle="Fruits 360"
										projectLink={'https://fruits-360.herokuapp.com/'}
										projectDescription="The website demonstrates a CNN model predicting the image of a fruit taken from any angle. The model is trained on the Kaggle Fruits 360 Dataset. The website is built with React and Flask."
									/>
								</ParallaxLayer>

								<ParallaxLayer
									offset={2}
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
									offset={3}
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
								backgroundImage: 
									`linear-gradient(
									rgba(11, 12, 16, 0.5), 
									rgba(11, 12, 16, 0.5)
									),`
									+
									`url(${spaceBg1})`,
								backgroundRepeat: 'repeat',
								zIndex: '-1',
							}}
						/>
					</Parallax>
				</ParallaxLayer>
					
				{/* Contact */}
				<ParallaxLayer
					className='end-section'
					offset={1} 
					speed={0.2}
					factor={1}
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
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

import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import "./assets/particles.json"

import Title from './Components/Title';
import Navbar from './Components/Navbar';
import Maincontent from './Components/Maincontent';

function App() {
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	
	return (
			<div className='App'>
				<Particles
					id="tsparticles"
					style={{
						
					}}
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						background: {
							color: {
							value: "#0d0f1c",
							},
						},
						fpsLimit: 30,
						interactivity: {
							detect_on: "window",
							events: {
								onClick: {
									enable: false,
									mode: "push",
								},
								onHover: {
									enable: false,
									mode: "bubble",
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 400,
									duration: 0.4,
								},
								bubble: {
									distance: 250,
									size: 8,
									duration: 2,
									opacity: 1,
									speed: 3
								},
							},
						},
						particles: {
							color: {
								value: "#ffffff",
							},
							links: {
								color: "#ffffff",
								distance: 150,
								enable: false,
								opacity: 0.4,
								width: 1,
							},
							collisions: {
								enable: false,
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "out",
								},
								random: true,
								speed: 0.15,
								straight: false,
								bounce: false,
								attract: {
									enable: false,
									rotateX: 600,
									rotateY: 600
								}
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 100,
							},
							opacity: {
								value: 1,
								random: true,
								anim: {
									enable: true,
									speed: 1,
									opacity_min: 0,
									sync: false,
								},
							},
							shape: {
								type: "circle",
								stroke: {
									width: 0,
									color: "#000000"
								},
								polygon: {
									sides: 5,
								},
							},
							size: {
								value: 3,
								random: true,
								anim: {
									enable: false,
									speed: 4,
									size_min: 0.3,
									sync: false,
								},
							},
						},
						detectRetina: true,
					}}
				/>
				<Title />
				<Navbar />

				{/* <div className='topMargin'></div> */}

				<Maincontent />
			</div>
	);
};
export default App;

import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./assets/particles.json"

function HeroSection() {
	return (
		<div>
			<div className="container">
				<div className="glitch" data-text="Portfolio">Portfolio</div>
				<div className="glow">Portfolio</div>
				<p className="subtitle">Engineer﹒Gamer﹒Explorer</p>
			</div>
			{/* <div className="scanlines"></div> */}
		</div>
	)
}

function Introduction() {
	return (
		<div className='intro'>
			<h3>Hi There! I am Yash Bhargava</h3>
		</div>
	)
}

// // particlesJS.load('particles-js', 'assets/particles.json', function() {
// // 	console.log('callback - particles.js config loaded');
// // });

// export function AddLibrary(urlOfTheLibrary) {
// 	const script = document.createElement('script');
// 	script.src = urlOfTheLibrary;
// 	script.defer = "defer";
// 	script.async = true;
// 	document.body.appendChild(script);
// }

// function App() {
// 	// const particlesInit = async (main) => {
// 	// 	console.log(main);

// 	// 	// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
// 	// 	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// 	// 	// starting from v2 you can add only the features you need reducing the bundle size
// 	// 	await loadFull(tsparticles);
// 	// };

// 	// const particlesLoaded = (container) => {
// 	// 	console.log(container);
// 	// };

// 	// return (
// 	// );

//     return (
//         <div className="App">
// 			<Particles id="tsparticles" url="./assets/particles.json" />
// 			{/* <div id='particles-js'></div> */}
//             {/* <HeroSection />
// 			<div>
// 				<h1 className="MyText">Hello there</h1>
// 			</div> */}

// 			{/* <ScriptTag isHydrating={true} type="text/javascript" 
// 				src="particles.js" /> */}
// 			{/* {AddLibrary('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js')} */}
// 			{/* {AddLibrary('particles.js')}
// 			{
// 				particlesJS.load('particles-js', 'assets/particles.json', function() {
// 					console.log('callback - particles.js config loaded');
// 				})
// 			} */}
//         </div>
//     );
// }

// export default App;

const App = () => {
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
	  	<div>
			<Particles
				id="tsparticles"
				style={{
					
				}}
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
						value: "#232741",
						},
					},
					fpsLimit: 120,
					interactivity: {
						detect_on: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
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
						speed: 1,
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
			<HeroSection />
			<Introduction />
	  	</div>
  );
};
export default App;

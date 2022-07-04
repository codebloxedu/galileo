
import { Colors } from '../components/Colors.js';
export let CodebloxCanvas = new FlowComponent();

Framer.Extras.Hints.disable();
Framer.Defaults.Animation.curve = Spring;

let prototypeWidth = 375;
let prototypeHeight = 667;

let app = new Layer({
	name: "Codeblox Prototype",
	width: prototypeWidth, height: prototypeHeight,
	backgroundColor: null,
	clip: true
});

let mainscreen = new Layer({
	name: "Screen Home", y: 0,
	width: prototypeWidth, height: prototypeHeight,
	backgroundColor: Colors.Variants.Surface,
	parent: app
});

let block = new Layer({
	name: "Block layer",
	width: 213, height: 260,
	midX: (prototypeWidth/2), midY: (prototypeHeight/2),
	image: "assets/Others/codeblox.png",
	parent: mainscreen,
});

block.states = {
	topPosition: {
		scale: 0.6,
		rotation: 45,
		y: 100,
	},
	bottomPosition: {
		scale: 0.5,
		rotation: -45,
		y: 400,
	}
};

block.onClick(()=>{
	block.stateCycle();
});

// END OF WORKSPACE ==================================

// ADAPT TO SCREEN ===================================
// This function centers the prototype, and scales it to fit the screen.
let fitToScreen = () => {
	app.originX = 0;
	app.originY = 0;
	let ratioW = Math.round((innerWidth/prototypeWidth)*100)/100;
	let ratioH = Math.round((innerHeight/prototypeHeight)*100)/100;
	if(ratioW > ratioH){
		app.scale = ratioH;
		app.x = ((innerWidth/2)-((app.width*ratioH)/2));
	} else if (ratioH > ratioW){
		app.scale = ratioW;
		app.x = ((innerWidth/2)-((app.width*ratioW)/2));
	}
};
fitToScreen();
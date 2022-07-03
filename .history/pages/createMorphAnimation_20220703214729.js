import { CodebloxUI } from '../components/CodebloxUI.js';
import { Header } from '../components/Examples/Header.js';

export let createMorphAnimation = new FlowComponent();

let prototypeWidth = 375;
let prototypeHeight = 667;

Framer.Extras.Hints.disable();
Framer.Defaults.Animation.curve = Spring;


// SECTION: CREATE NEW SCREEN ============
let app = new Layer({
    width:prototypeWidth, height: prototypeHeight,
    clip: true
})

let mainscreen = new Layer({
	width: prototypeWidth, height: prototypeHeight,
	backgroundColor: 'white',
	parent: app
})


let header = new Header({
    label: "Morph Animation",
    hasBackButton: false, 
    parent:app
})

// SECTION: CREATE ANIMATED OBJECT ===========
let block = new Layer({
	name: "Block",
	width: 100, height: 100,
    borderRadius: 10,
    midX: (prototypeWidth/2), midY: (prototypeHeight/2),
	backgroundColor: CodebloxUI.Colors.Surface,
	parent: mainscreen
});

block.states = {
    circle: {
        borderRadius: 60,
        midX: (prototypeWidth/2), midY: (prototypeHeight/2),
    },

    triangle: {
        width: 100, height: block.height * 2,
        midX: (prototypeWidth/2), midY: (prototypeHeight/2)
    },

    triangle: {
        width: 100, height: block.height * 1.5,
        midX: (prototypeWidth/2), midY: (prototypeHeight/3)
    }
}

block.onClick(()=>{
    block.stateCycle();
})


// ADAPT TO SCREEN ===================================
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
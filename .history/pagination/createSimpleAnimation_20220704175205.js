import { Colors } from '../components/Colors.js';
import { Header } from '../components/Examples/Header.js';


export let createSimpleAnimation = new FlowComponent();

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
    label: "Simple Animation",
    hasBackButton: false, 
    parent:app
})

// SECTION: CREATE ANIMATED OBJECT ===========
let block = new Layer({
	name: "Block",
	width: 100, height: 100,
	scale: 0.8,
    midX: (prototypeWidth/2), midY: (prototypeHeight/2),
	backgroundColor: Colors.Variants.Surface,
	parent: mainscreen
});

block.onClick(()=>{
    block.animate({
        y:prototypeHeight/5
    })
})

// SECTION: RESET ANIMATION ===========
let resetButton = new Layer({
	y: 400,
	width: 120, height: 30,
    scale: 1,
	backgroundColor: 'rgba(0,0,0,0.1)',
	borderRadius: 6,
	parent: app
});
resetButton.centerX();

Utils.labelLayer(resetButton, 'Reset');

resetButton.style = {
	color: "#212121"
};

resetButton.states = {
    clickedState: {
        scale: 1.1
    }
}

resetButton.onClick(()=>{
    resetButton.stateCycle();
	block.animate({
		midX: (prototypeWidth/2), midY: (prototypeHeight/2),
	})
});

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
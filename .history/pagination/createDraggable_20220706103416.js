import { Colors } from '../components/Colors.js';
import { Header } from '../components//Header.js';

export let createDraggable = new FlowComponent();

let prototypeWidth = 375;
let prototypeHeight = 667;

Framer.Extras.Hints.disable();
Framer.Defaults.Animation.curve = Spring;

// SECTION: CREATE NEW SCREEN AND DRAGGABLE OBJECT ============
let createDraggableLayer = new Layer({
    width:prototypeWidth, height: prototypeHeight,
    clip: true
})

let mainscreen = new Layer({
	width: prototypeWidth, height: prototypeHeight,
	backgroundColor: 'white',
	parent: createDraggableLayer
})

let header = new Header({
    label: "Drag Experience",
    hasBackButton: false, 
    parent:createDraggableLayer
})


// Membuat layer baru, yaitu kotak berwarna biru
let block = new Layer({
	width: 100, height: 100,
	scale: 0.8,
	backgroundColor: Colors.Variants.Surface,
	parent: mainscreen,
});
block.centerX();




// ADAPT TO SCREEN ===================================
let fitToScreen = () => {
	createDraggable.originX = 0;
	createDraggable.originY = 0;
	let ratioW = Math.round((innerWidth/prototypeWidth)*100)/100;
	let ratioH = Math.round((innerHeight/prototypeHeight)*100)/100;
	if(ratioW > ratioH){
		createDraggable.scale = ratioH;
		createDraggable.x = ((innerWidth/2)-((createDraggable.width*ratioH)/2));
	} else if (ratioH > ratioW){
		createDraggable.scale = ratioW;
		createDraggable.x = ((innerWidth/2)-((createDraggable.width*ratioW)/2));
	}
};
fitToScreen();
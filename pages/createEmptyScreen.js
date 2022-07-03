import { CodebloxUI } from '../components/CodebloxUI.js';
export let creatEmptyScreen = new FlowComponent();

let prototypeWidth = 375;
let prototypeHeight = 667;

Framer.Extras.Hints.disable();
Framer.Defaults.Animation.curve = Spring;

// SECTION: CREATE NEW SCREEN ================
let app = new Layer({
    name: "New page",
    width: prototypeWidth, height: prototypeHeight,
    clip: true
})

let mainscreen = new Layer({
    name: "Main Screen",
    width: prototypeWidth, height:prototypeHeight,
    backgroundColor: CodebloxUI.Colors.Background,
    parent: app
})

let block = new Layer({
    name: "Object",
	width: 213, height: 260,
	midX: (prototypeWidth/2), midY: (prototypeHeight/2),
    backgroundColor: CodebloxUI.Colors.Surface,
	parent: mainscreen,
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
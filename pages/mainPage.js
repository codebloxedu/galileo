// import { CodebloxUI } from '../CodebloxUI.js';
// import { MenuButton } from './MenuButton.js';

import { MenuButton } from "../components/Examples/MenuButton.js";
// import { createDraggable } from "./pages/createDraggable.js";

Framer.Extras.Hints.disable();
Framer.Defaults.Animation.curve = Spring;

let prototypeWidth = 375;
let prototypeHeight = 677;


// SECTION: CREATE NEW SCREEN AND MENU ================
export let mainPage = new FlowComponent();

let app = new Layer({
    width:prototypeWidth, height: prototypeHeight,
    clip: true
})

let mainscreen = new Layer({
    name: "Screen Home", y: 0,
	width: prototypeWidth, height: prototypeHeight,
	backgroundColor: '#0088FF',
	parent: app
})

let headerlogo = new Layer({
	image: './components/Examples/Assets/codebloxheader.png',
	y: 100, 
	width: 195, height: 38,
	parent: mainscreen
});
headerlogo.centerX();

// SECTION: CREATE MENU BUTTON ================
let menuOptions = new Layer({
	width: prototypeWidth,
	backgroundColor: null,
	parent: mainscreen
});

let optionA = new MenuButton({
	label: "1. Create an Empty Screen",
	parent: menuOptions
});
optionA.centerX();

let optionB = new MenuButton({
	y: optionA.maxY + 18,
	label: "2. Create Draggable Object",
	parent: menuOptions
});
optionB.centerX();

let optionC = new MenuButton({
    y: optionB.maxY + 18, 
    label: "3. Create Simple Animation",
    parent: menuOptions
})
optionC.centerX();

let optionD = new MenuButton({
    y: optionC.maxY + 18, 
    label: "4. Create Animated States",
    parent: menuOptions
})
optionD.centerX();

menuOptions.height = optionC.maxY;
menuOptions.center();

// SECTION: CREATE HYPERLINK TO EACH PAGE ================
// optionA.onClick(()=>{
// 	mainPage.showNext();
// });


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
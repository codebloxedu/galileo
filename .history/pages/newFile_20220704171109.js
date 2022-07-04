import { CodebloxUI } from "../components/CodebloxUI.js";


export let newFile = new FlowComponent()

let background = new Layer({
    backgroundColor: "white",
    width: 360, 
    height: 640,
    parent: newFile
})
background.centerX();

let objek = new Layer({
    backgroundColor: CodebloxUI.Colors.Surface,
    borderRadius: 100,
    parent: background
})
objek.centerX();
objek.draggable.enabled = true;



objek.states = {
    diklik: {
        backgroundColor: "red"
    },
    setelahKlik: {
        backgroundColor: "green"
    }
}

objek.onClick(() => {
    // objek.animate({
    //  borderRadius: 50
    // })
    objek.stateCycle();
 })
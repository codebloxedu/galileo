import { CodebloxUI } from "../components/CodebloxUI";


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
    parent: background
})
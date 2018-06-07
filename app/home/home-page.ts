import { Page } from "ui/page";
import { AR, ARLoadedEventData, ARSceneTappedEventData, ARNode } from 'nativescript-ar';
import {Button} from 'tns-core-modules/ui/button';

let box:ARNode;
let type:string;

export function openModels(args) {
  const button:Button = args.object;
  const page:Page = button.page;
  page.frame.navigate('models/models-page');
}

export function pageLoaded(args) {
  type = args.type;
  console.log(args);
}


export function onMoveTap(){
  if(box) {
    console.log("box.position.y: " + box.position.y + "box.position.x: " + box.position.x + "box.position.z: " + box.position.z);
    box.position.y -= 100;
    box.position.z -= 50;
  }
}

export function arLoaded(args: ARLoadedEventData): void {
    const ar: AR = args.object;
      ar.addBox({
      position: {
        x: 0,
        y: -0.5,
        z: -1
      },
      scale: 1,
      dimensions: {
        x: 0.3,
        y: 0.3,
        z: 0.3
      },
      draggingEnabled: true,
      rotatingEnabled: true,
      onTap: node => {node.position.y -= 10; node.position.z -= 0.5;}
    })
    .then((node) => {
      box = node;
      node.position.z = -500;
    });
}

export function sceneTapped(args: ARSceneTappedEventData): void {
    console.log("Scene tapped x: " + args.position.x + " y: " + + args.position.y + " z: " + + args.position.z);
}
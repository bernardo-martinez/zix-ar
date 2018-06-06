/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "ui/page";

import { HomeViewModel } from "./home-view-model";
import { AR, ARLoadedEventData, ARPlaneTappedEventData, ARSceneTappedEventData } from 'nativescript-ar';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();
}

export function arLoaded(args: ARLoadedEventData): void {
    const ar: AR = args.object;
    // interact with the 'ar' object here if you like
}

export function planeTapped(args: ARPlaneTappedEventData): void {
    console.log("Plane tapped x: " + args.position.x + " y: " + + args.position.y);
    args.object.addBox({
      position: {
        x: args.position.x,
        y: args.position.y + 1, // drop the box from a meter high
        z: args.position.z
      },
      dimensions: 1,
      scale: 0.15,
      materials: ["tnsgranite"], // this needs to be part of your app's assets, see the demo app
      mass: 0.0000001, // very light - makes it bounce a bit when dropped
      onTap: node => console.log("box tapped: " + node.id)
    }).then(node => console.log("box added: " + node.id));
  }
  
export function sceneTapped(args: ARSceneTappedEventData): void {
    console.log("Scene tapped x: " + args.position.x + " y: " + + args.position.y + " z: " + + args.position.z);
    args.object.addBox({
      position: {
        x: 0,
        y: 0.1, // drop the box from a meter high
        z: -1
      },
      scale: 1,
      dimensions: {
        x: 0.3,
        y: 0.3,
        z: 0.3
      },
      //materials: ["Assets.scnassets/Materials/tnsgranite/tnsgranite-diffuse.png"], // must be in App_Resources
      //mass: 0.002, // very light - makes it bounce a bit when dropped
      onTap: node => console.log("box tapped: " + node.id)
    }).then(node => console.log("box added: " + node.id));
  }
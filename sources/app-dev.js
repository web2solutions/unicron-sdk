

import { Cybertron } from "../node_modules/unicron/index.js";

export class MyApp extends Cybertron.Unicron{
	constructor(config){
		super(config);
		//console.log(config);
	}
}

window.MyApp = MyApp;
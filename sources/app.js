import "less/app.less";

import { decepticons } from "../node_modules/decepticons/index.js";

export class MyApp extends decepticons.Unicron{
	constructor(config){
		super(config);
		//console.log(config);
	}
}

window.MyApp = MyApp;
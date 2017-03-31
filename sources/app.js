import "less/app.less";

import { decepticons } from "../node_modules/decepticons/index.js";

export class MyApp extends decepticons.Unicron{
	constructor(config){
		super(config);
		//console.log(config);
	}
}

const _root = window || global;
_root.MyApp = MyApp;
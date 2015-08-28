import {EXTENSION_NAME, QVA_REMOTE} from './config.js';
import paint from './component.js';

const scripts = [
	'//code.jquery.com/jquery-1.11.3.min.js',
	// 'http://website.com/script.min.js'
];

//Qva.LoadCSS('http://website.com/styles.css');
//Qva.LoadCSS(QVA_REMOTE + '/styles.css');

Qva.LoadScriptArray(scripts, () => {
	// if you need to load component.js after the scripts have been loaded,
	// you can use require (import is hoisted !!!)
	// let paint = require('./component');
	Qva.AddExtension(EXTENSION_NAME, paint);
});
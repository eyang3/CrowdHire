require('babel-polyfill');
var config = require('config');
async function test() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('hello');
		}, 1000);
	});
}

async function other() {
	let m = await test();
	console.log('done');
}
console.log(config.get('database.host'));
other();

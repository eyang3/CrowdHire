require('babel-polyfill');
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

other();

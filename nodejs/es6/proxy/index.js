let msgData = {};

let msgProxy = new Proxy(msgData, {
	get: function(target, name, receiver) {
		return target[name];
	},
	set: function(obj, prop, value) {
		obj[prop] = value;
		return true;
	}
});

msgProxy.content = 'Hello World!';

console.log('from proxy: ' + msgProxy.content);
console.log('from msgData: ' + msgData.content);
console.log('msgData: ' + JSON.stringify( msgData));

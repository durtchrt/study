// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
let p1 = new Promise((resolve, reject) => {
	setTimeout(  () => { resolve('Hello World');  }, 500);
});

p1.then((val) => { console.log(val);});

let p2 = new Promise((resolve, reject) => {
	setTimeout(  () => { reject('Hello Error');  }, 500);
});


p2.catch((reason) => { console.log(reason);});

let param = {data: 'Hello World'}
let p3 = () => {
    return new Promise( (resolve, reject) => {
	setTimeout(() => {
		console.log('complete p3 ');
		param.p3 = true;
		resolve(param);
	}, 1000);
    });
}

let p4 = (param) => {
    return new Promise( (resolve, reject) => {
	setTimeout(() => {
		console.log('complete p4: ' + JSON.stringify(param));
		param.p4 = true;
		resolve(param);
	}, 1000);
    });
}


p3().then(p4)
  .then((val) => {console.log(val);});




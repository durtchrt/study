function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

console.log('--------------------------');
function* logGenerator() {
  console.log('yield1');
  console.log(yield);
  console.log('yield2');
  console.log(yield);
  console.log('yield3');
  console.log(yield);
}

var gen = logGenerator();
console.log(gen.next()); 
console.log(gen.next('pretzel')); 
console.log(gen.next('california')); 
console.log(gen.next('mayonnaise')); 
console.log(gen.next('mayonnaise2')); 


console.log('--------------------------');
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for(let value of myIterable){ 
	console.log(value);
}

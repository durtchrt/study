// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

var o = {};

Object.defineProperty(o, 'a', {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});

var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() { return bValue; },
  set: function(newValue) { bValue = newValue; },
  enumerable: true,
  configurable: true
});

o.b;

console.log('o.b: ' + o.b );
o.b = 100;
console.log('o.b = 100 '  );
console.log('o.b: ' + o.b );
console.log('bValue: ' + bValue  );



// 두 가지를 섞어서 정의할 수 없다:
/*
Object.defineProperty(o, 'conflict', {
  value: 0x9f91102,
  get: function() { return 0xdeadbeef; }
});
*/

console.log('------ Enumerable --------');
var o = {};
Object.defineProperty(o, 'a', { value: 1, enumerable: true });
Object.defineProperty(o, 'b', { value: 2, enumerable: false });
Object.defineProperty(o, 'c', { value: 3 }); // enumerable의 기본값은 false
o.d = 4; // 기존 방식으로 키를 설정하여 생성하는 경우, enumerable의 기본값은 true

for (var i in o) {
  console.log(i);
}
// 'a', 'd' 출력 (순서는 무작위)

let result = JSON.stringify(Object.keys(o)); // ['a', 'd']
console.log('Object.keys(o): ' + result);

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false


console.log('------- readOnly --------');
// 만약 다음과 같이 표현한다면,
//Object.defineProperty(o, 'c', { value: 1 });
// 아래의 의미를 지니게 된다:
Object.defineProperty(o, 'd', {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false
});

console.log('o.d = 100;' );
o.d = 100;
console.log('o.d: ' + o.d);

// JavaScript Type Coercion & Operator Behavior Questions

// These are JavaScript tricky questions often asked in:
// - Frontend developer interviews
// - JavaScript quizzes
// - Code puzzles / challenges

// These are often tricky because they test deep understanding of JavaScript quirks, not just syntax.

console.log(typeof null == typeof Object); // false
console.log(typeof null === typeof Object); // false

console.log(typeof null === typeof {}); // true
console.log(typeof null === typeof {}); // true

console.log([] + 0); // 0

console.log({} + 0); // [object Object]0

console.log([] == []); // false
console.log([] === []); // This condition will always return 'false' since JavaScript compares objects by reference, not value.

console.log({} == {}); // false
console.log({} === {}); // This condition will always return 'false' since JavaScript compares objects by reference, not value.

console.log(5 + '3'); // 53

console.log(5 - '3'); // 2

console.log(null + 0); // 0

console.log(undefined + 0); // NaN
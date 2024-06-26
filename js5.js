//task 1-1
localStorage.setItem('string ', 'Hello, World!');
let str = localStorage.getItem('string ');
console.log(str);

//task 1-2
localStorage.setItem('num ', '123');
let N = localStorage.getItem('num ');
console.log(N);

//task 1-3
localStorage.setItem('boolean ', 'true');
let B = localStorage.getItem('boolean ');
console.log(B);

//task 1-4
localStorage.setItem('item ', 'Hi!');
let I = localStorage.getItem('item');

localStorage.removeItem('item');

//task 1-5
localStorage.setItem('CLE1', 'hi you');
localStorage.setItem('CLE2', 'i like this book');

localStorage.clear();

console.log(localStorage.getItem('CLE1')); 
console.log(localStorage.getItem('CLE2')); 

//task 1-6
localStorage.setItem('nam', 'raghad');

let nam = localStorage.getItem('nam') !== null;
console.log(nam);

//task 1-7
let array = [1, 2, 3];
localStorage.setItem('a', array);

let retArr= localStorage.getItem('a');
console.log(retArr); 

//task1-8
let obj = {name: "rayyan", age: 20};
localStorage.setItem('bro', obj);

let retObj = (localStorage.getItem('bro'));
console.log(retObj); 

//task 1-9
localStorage.setItem('book', '	With Borges');
localStorage.setItem('author', 'alberto manguel');

console.log(localStorage.getItem('book'));
console.log(localStorage.getItem('author')); 


//task 1-10
localStorage.setItem('u', ' student');
localStorage.setItem('u', 'graduated');

console.log(localStorage.getItem('u')); 





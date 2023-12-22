let x;

// Array Literal
const numbers = [23, 45, 55, 55, 93];

// numbers.push(100)

// numbers.pop();

// numbers.unshift(99);

// numbers.shift();

// numbers.reverse();

x = numbers.includes(23);

x = numbers.indexOf();

x = numbers.slice(1, 4);

// x = numbers.splice(1, 4);

// x = numbers.splice(3, 1)

x = numbers.splice(1, 4).reverse().toString() 

const arr = [-2, -1 , 1, 2, 3];

let sum = 0;
arr.filter((item) => item > 0).forEach((item) => sum += item);

// arr.filter((item) => item > 0).reduce();

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map((item) => item.charAt(0).toUpperCase() + item.substring(1));
const capitalizedWords2 = words.map((item) => item.charAt(0).toUpperCase() + item.slice(1));

x = capitalizedWords2;

console.log(x);



// console.log(x, numbers;
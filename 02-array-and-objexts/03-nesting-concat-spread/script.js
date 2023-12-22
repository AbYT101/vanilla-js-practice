let x;

const fruits = ['Apple', 'Pear', 'orange'];
const berries = ['Strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);
// x = fruits[3][1];

const allFruits = [fruits,berries];

x = allFruits;

x = allFruits[1][0];

x = fruits.concat(berries);

// Spread operator 

x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8 ];

x = arr;

x = arr.flat();

// Static methods
x = Array.isArray('');

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);


console.log(x);
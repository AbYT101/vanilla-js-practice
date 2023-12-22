let a;

a = 10 && 20;
a = 10 && 30 && 40;
a = 0 && 30 && 40;

a = 10 && 0 && 30;

// console.log(a);

const posts = ['Post One', 'Post two', 'Post three'];

// posts.length && console.log(posts[0]);

// || - Will return first truthy value

let b;

b = 10 || 20; 
b = 0 || 20;

b = 0 || null || '';

// console.log(b);

// ?? returns the right side operand when the left is null or undefined

let c;

c = 0 ?? 10;

c = null ?? 10;

c = undefined ?? 30;

// console.log(c);


let f = 3;

// if(!f){
//     f = 30;
// }

f ??= 30;

// console.log(f);

const items = ['Books', 'table', 'chair', 'kite'];

for (const item of items){

}

const str = 'Hello world';

for(const letter of str){

}

const map = new Map();
map.set('name', 'John');

for(const man in map){

}

const colorObj = {
    color: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
}

for(const key in colorObj){
    // console.log(key, colorObj[key]);
}

const colorArr = ['Orange', 'red', 'yellow'];
for (const color in colorArr){
    // console.log(colorArr[color]);
}


const socials = ['Twitter', 'LinkedIn', 'Facebook'];

socials.forEach(logSocials);

function logSocials(social) {
    // console.log(social);
};

const words = ['Spray', 'limit', 'elite', 'exuberant'];

const numbers = [1, 2, 3, 4, 5,6 ,7, 8, 9, 10]

// const result = words.filter(word => word.length > 5);

const result = numbers.filter(num => num % 2 === 0);

console.log(result);

const companies = [];

const retailCompanies = companies.map(company => company.category === 'Retail');

const earlyCompanies = companies.filter(company => company.start >= 1980 && company.end < 2005 );


const nums = [1, 2, 3, 5];

const double = nums.map(num => num *2);

const double2= companies.map(company => company.name);

const companyInfo = companies.map(company => {company.name, company.category});

const companyLength = companies.map(company => {namw:company.name, company.end - company.start + ' years'})


const chainMap = nums
.map(num => Math.sqrt(num))
.map((num) => num * num);

// console.log(chainMap);


const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numberss.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

const totalPrices = companies.reduce((acc, cur) => acc + cur.prices, 0);

console.log(sum);

const roles = ['coder', 'programmer', 'developer'];

const capitalized = roles.map(role => {role[0].toUpperCase() + role.slice(1)});

const nummms = [2, -30, 50, 20, -12, -9, 7];

const summed = nummms.filter(num => num > 0).reduce((acc, cur) => acc + cur, 0);

console.log(summed);
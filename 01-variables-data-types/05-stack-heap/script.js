// Values stored on the stack
const name = 'John'
const age = 30;


// Reference values are stored on heap
const person = {
   name: 'Brad',
   age: 40
}

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradly';
newPerson.lack = 'Home';

console.log(name, newName);

console.log(person, newPerson);
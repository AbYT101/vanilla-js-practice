let output

// Get child elements

const parent = document.querySelector('.parent');
output = parent.children[0].innerText;
output = parent.children[0].className;
output = parent.children[0].nodeName; 

parent.children[1].innerText = 'Child Two!';
parent.children[1].style.color = 'Red';

parent.firstElementChild.innerText = 'First element';
parent.lastElementChild.innerText = 'Child three';


// Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';


// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'Yellow'


console.log(output);
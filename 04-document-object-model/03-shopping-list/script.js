// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes
document.getElementById('app-title').title = "Shopping List";
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');


// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

//  const secondItem = document.querySelector('li:nth-child(2')
//  secondItem.style.color = 'red'
//  secondItem.innerText = 'Apple Juice';

//  // use these methods on other elements
//  const list = document.querySelector('ul');
//  console.log(list);
//  const firstItem = list.querySelector('li');
//  firstItem.style.color = 'blue'



const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

listItems[1].style.color = 'blue';

// listItems.forEach( (item, index) => {
//     item.style.color = 'red'
//     if(index%2 != 0){
//         item.style.color = 'blue'
//     }
//     if (index === 3) {
//         item.innerText = 'Oranges'
//         item.innerHTML = `Oranges <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//       </button>`
//     };
// });

const listItems2 = document.getElementsByClassName('item');
const listItems3 = Array.from(listItems2);

listItems3.forEach(element => {
    console.log(element.innerText);
});

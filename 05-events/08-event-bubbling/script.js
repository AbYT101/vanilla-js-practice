const button = document.querySelector('form button');
const div = document.querySelectorAll('form div');

const form = document.querySelector('form');

console.log(div);
button.addEventListener('click', (e) => { 
    alert('Button was clicked');
    // e.stopPropagation();
});

div[1].addEventListener('click', (e) => {
    alert('Div was clicked')
});

form.addEventListener('click', () => {
    alert('Form was clicked');
});

document.body.addEventListener('click', () => {
    alert('Body was clicked');
})


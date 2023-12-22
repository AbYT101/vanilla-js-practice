// Refactored to multiple values
function refactoredItemCreate (item) {
    const li = createLi('item');
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(createText(item));
    button.appendChild(createIcon('fa-solid fa-xmark'));
    li.appendChild(button);

    document.querySelector('.items').appendChild(li)
    
}

function createLi (classes){
    const li = document.createElement('li');
    li.className = classes;
    return li;
}

function createButton (classes) {
    const button = document.createElement('button');
    button.className = classes;
    return button;
}

function createIcon (classes) {
    const icon = document.createElement('i');
    icon.className = classes
    return icon
}

function createText (content) {
    const text = document.createTextNode(content);
    return text
}

refactoredItemCreate('Cheese');
refactoredItemCreate('Cabbage');
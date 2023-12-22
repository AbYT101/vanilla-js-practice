const itemFrom = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate input
    if(itemInput.value === ''){
        alert('Please enter the name of item');
        return
    }
    
    // Create list item
    const li = document.createElement('li');
    li.append(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
    
    itemInput.value = '';

}

function createButton(className) {
    const button = document.createElement('button');
    button.className = className;
    button.append(createIcon('fa-solid fa-xmark'));
    return button
}

function createIcon(className) {
    const icon = document.createElement('i');
    icon.className = className
    return icon
}

// Event listeners 
itemFrom.addEventListener('submit', addItem)
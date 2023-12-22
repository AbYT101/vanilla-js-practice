const itemFrom = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filterItem = document.getElementById('filter');

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
    checkUI();
}


function addItem(e) {
    e.preventDefault();

    // Validate input
    if(itemInput.value === ''){
        alert('Please enter the name of item');
        return
    }
    
    addItemToDOM(itemInput.value);
    
    addItemToLocalStorage(itemInput.value)
    
    checkUI();
    
    itemInput.value = '';

}

function addItemToDOM(item){
    // Create list item
    const li = document.createElement('li');
    li.append(document.createTextNode(item));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
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

function addItemToLocalStorage(item){
    let itemsFromStorage = getItemsFromStorage();
 
    itemsFromStorage.push(item);

    // Convert to JSON sting and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = []
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();
    itemsFromStorage = itemsFromStorage.filter(i => i != item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Are you sure')){
            e.target.parentElement.parentElement.remove();
            checkUI();
            console.log(e.target.parentElement.parentElement.firstChild.textContent);
            removeItemFromStorage(e.target.parentElement.parentElement.firstChild.textContent);
        }
    }
}

function removeAllItems(e) {
//    Array.from(itemList.children).forEach((node) => node.remove());
    // itemList.innerHTML = '';
    while(itemList.firstChild){
        itemList.firstChild.remove();
    }
    checkUI();
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0 ){
        clearBtn.style.display = 'none';
        filterItem.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        filterItem.style.display = 'block';
    }
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
        items.forEach((item) => {
            const itemName = item.firstChild.textContent.toLowerCase()
           if(itemName.indexOf(e.target.value.toLowerCase())){
            item.style.display = 'flex';
           }
           else {
            item.style.display = 'none';
           }
        })
    
}

// Initialize app

function init() {
    // Event listeners 
    itemFrom.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);
    clearBtn.addEventListener('click', removeAllItems);
    filterItem.addEventListener('keydown', filterItems)
    document.addEventListener('DOMContentLoaded', displayItems)

    checkUI();
}

init();

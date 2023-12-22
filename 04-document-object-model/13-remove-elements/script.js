function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem() {
    const firstItem = document.querySelector('li:first-child');
    firstItem.remove();
}

function removeFirstUsingParent() {
    const ul = document.querySelector('ul');
    const li2 = document.querySelector('li:last-child');

    ul.removeChild(li2);
}

function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const lis = document.querySelectorAll('li');

    lis.forEach((li, index) => {
        if(index +1 === itemNumber)
            ul.removeChild(li)
    })
}

function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);

    
}

function removeItem3(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll(`li`)[itemNumber - 1];

    ul.removeChild(li);

    
}



// removeClearButton();
// removeFirstItem();
// removeFirstUsingParent();

removeItem3(4)
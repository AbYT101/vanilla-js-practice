const clearBtn = document.querySelector('#clear');

function onClear () {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    items.forEach((item) => item.remove());

    // while (itemList.firstChild) {
    //     itemList.removeChild(itemList.firstChild)
    // }
}

// Javascript event listener 
// clearBtn.onclick = function () {
//     alert('Clear Items');
// }

// clearBtn.onclick = function () {
//     console.log('Clear items');
// }

//add event listener
// clearBtn.addEventListener('click', async () => alert('clear Items'));

clearBtn.addEventListener('click', onClear);

// const loc = navigator.geolocation.getCurrentPosition((position) => console.log(position));


// setTimeout(() => clearBtn.removeEventListener, 5000);

console.log(document);
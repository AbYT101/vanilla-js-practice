const itemInput = document.getElementById('item-input');

const onKeyPress = e => console.log('keypress');
const onKeyUp = e => console.log('keyUp');
const onKeyDown = e =>{
    // key
    // if(e.key === 'Enter'){
    //     alert('You pressed');
    // }

    // keyCode
    // https://www.topal.com/developers/keycode/table-of-all-keycodes
    // if(e.keyCode === 13)
    //     alert('You pressed enter');

    // code
    // console.log(e.code);

    if(e.repeat) {
        console.log('You are holding down' + e.key);
    }

    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);
    
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
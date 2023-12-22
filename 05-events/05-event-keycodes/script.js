const keyCodes = document.querySelectorAll('.key');

function displayKeyCodes(e) {
    keyCodes[0].innerHTML = `${e.key !== ' ' ? e.key : 'Space'}<small>e.key</small>`
    keyCodes[1].innerHTML = `${e.keyCode}<small>e.key</small>`
    keyCodes[2].innerHTML = `${e.code}<small>e.key</small>`
}


window.addEventListener('keydown', displayKeyCodes)
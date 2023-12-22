const logo = document.querySelector('img');

function onClick(e) {
    // console.log(e.target);
    // e.target.style.backgroundColor = 'black';
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
}   

function onDrag(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`
}

logo.addEventListener('click', onClick)
logo.addEventListener('drag', onDrag)

// document.body.addEventListener('click', function(e) {
//     console.log(e.target);
//     console.log(e.currentTarget);;
// })

document.querySelector('a').addEventListener('click', 
    function(e){
        e.preventDefault();
        console.log('Link was clicked');
});
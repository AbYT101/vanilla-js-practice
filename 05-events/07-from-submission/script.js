const form = document.getElementById('item-form');

function onsubmit(e) {
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === 0){
        alert('Please fill in all fields')
    }

    console.log('Submitted');
}

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);
    
    // const item = formData.get('item')
    // const priority = formData.get('priority');

    const entries = formData.entries();

    for(let entry of entries) {
        console.log(entry[1 ]);
    }

    // console.log(entries);
}

form.addEventListener('submit', onSubmit2)
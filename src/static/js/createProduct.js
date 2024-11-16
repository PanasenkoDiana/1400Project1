const button = document.querySelector('button');
const name = document.querySelector('#productName');
const description = document.querySelector('#productDesc');
const price = document.querySelector('#productPrice');

button.addEventListener('click', function() {
    fetch('/product/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            description: description.value,
            price: parseFloat(price.value),
        })
    })    
})
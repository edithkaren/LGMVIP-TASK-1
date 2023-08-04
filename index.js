let input = document.querySelector('.input');
let addBtn = document.querySelector('.addBtn');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div')
        newItem.classList.add('items')
        let newHtml = ''
        newHtml += '<p>' + input.value + '</p>'
        newHtml += '<div class="item-btn"><p class="cross">❌</p></div>'
        newItem.innerHTML = newHtml
        tasks.appendChild(newItem)
        input.value = ''
    } else {
        alert('Please enter Work')
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('cross')) {
        e.target.parentElement.parentElement.remove()
    }
})

// Approach
// 1. Create Elements
// 2. Select elements 
// 3. Add Event Listener on all the buttons
// 4. make functions that increments and decremnts and reset 
// 5. call that function


let counter =  document.querySelector('.box')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')
let reset = document.querySelector('.reset')

inc.addEventListener('click', function() {
    counter.innerText = Number(counter.innerText) + 1;
})

dec.addEventListener('click', function() {
    counter.innerText = Number(counter.innerText) - 1;
})
reset.addEventListener('click', function() {
    counter.innerText = 0;
})



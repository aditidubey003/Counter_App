
// Approach
// 1. Create Elements
// 2. Select elements 
// 3. make individual f for increments, decremnts and reset
// 4. Add Event Listener on all the buttons
// 5. Wrap the Whole Code in a f to cahnge scope and call that so that no one can reassign the value to count and manipulate it.

function counterApp (){

let counter =  document.querySelector('.box')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')
let reset = document.querySelector('.reset')

let count = 0
inc.addEventListener('click', function() {
    count = count + 1;
    counter.innerText = count;
})

dec.addEventListener('click', function() {
    count = count - 1;
    counter.innerText = count;
})
reset.addEventListener('click', function() {
    count = 0;
    counter.innerText = count;
})
}

counterApp()
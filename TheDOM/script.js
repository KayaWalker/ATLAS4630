const first = document.getElementById('something');
console.log(first);

const second = document.getElementById('too');
console.log(second);

const third = document.getElementById('double');
console.log(third);

first.addEventListener('click', () => {
    first.style.backgroundColor = 'blue';
    first.style.color = 'white';
})

second.addEventListener('click', () => {
    second.textContent = 'lol';
})

third.addEventListener('dblclick', () => {
    third.textContent = "(x_x;)"
})
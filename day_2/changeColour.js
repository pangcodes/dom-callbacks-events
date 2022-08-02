const button = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function changeBackground() {
    const randomColour = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColour;
}

// button.addEventListener('click', changeBackground);

// button.addEventListener('focus', changeBackground);

// button.addEventListener('dblclick', changeBackground);
// button.addEventListener('mouseenter', changeBackground);
// button.addEventListener('mouseover', changeBackground);
// button.addEventListener('mousemove', changeBackground);

// button.removeEventListener('mousemove', changeBackground);

// Added multiple listeners
button.addEventListener('click', changeBackground);
button.addEventListener('click', () => console.log("Hello! Button was clicked."));
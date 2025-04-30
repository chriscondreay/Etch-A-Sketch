// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('shake');

// Setup canvas to draw
console.log(ctx);

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw(options) {
    console.log(options);
}

// Write handler for keys
function handleKeys(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });  
    }
}

// Clear/shake function


// Listen for arrow keys
window.addEventListener('keydown', handleKeys);
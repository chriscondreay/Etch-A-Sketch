// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

const MOVE_AMOUNT = 10;

// Setup canvas to draw
console.log(ctx);

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // Start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // move x and y values depending on the key pressed
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT
            break;
        default:
            break;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write handler for keys
function handleKeys(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });  
    }
}

// Clear/shake function
function clearCanvas(e) {
    canvas.classList.add('shake');
}


// Listen for arrow keys
window.addEventListener('keydown', handleKeys);
shakeButton.addEventListener('click', clearCanvas);
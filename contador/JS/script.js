var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Gera um valor aleatório
    currentNumberWrapper.style.color = randomColor; // Aplica a cor no js
}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    currentNumberWrapper.style.color = randomColor;
}

function changeBackgroundColor() {
    var body = document.querySelector("body");
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);  
    body.style.backgroundColor = randomColor; 
    }


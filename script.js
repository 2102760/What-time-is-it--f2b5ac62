const pi = 3.14;

function calculateperiphery() {
    let diameter = document.getElementById('diameter').value;
    let result = diameter * pi;
    let resultSpan = document.getElementById('result');
    resultSpan.innerText = result;
}

let span = document.getElementById('time');
let date = new Date();
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
span.innerText = time;
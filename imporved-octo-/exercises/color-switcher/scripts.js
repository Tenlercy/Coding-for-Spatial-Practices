console.log('connected');

let body = document.querySelector("body")

let yellowCircle = document.getElementById("yellowButton");
let blueCircle = document.getElementById("blueButton");
let whiteCircle = document.getElementById("whiteButton");
let grayCircle = document.getElementById("grayButton");

yellowCircle.addEventListener("click", turnPageYellow);
blueCircle.addEventListener("click", turnPageBlue);
whiteCircle.addEventListener("click", turnPageWhite);
grayCircle.addEventListener("click", turnPageGray);

// yellowCircle.addEventListener("click", turnYellow);


function turnPageYellow(){
    console.log('turn me yellow');
    let body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
}

function turnPageBlue(){
    let heading = document.querySelector("h1");
    heading.style.color = "white";
    console.log('turn me blue');
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

function turnPageWhite(){
    console.log('turn me white');
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
}

function turnPageGray(){
    console.log('turn me gray');
    let body = document.querySelector("body");
    body.style.backgroundColor = "gray";
}
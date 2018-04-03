var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#messageDisplay");
var title = document.querySelector("#picked");
var h1 = document.querySelector("h1");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var reset = document.querySelector(".reset");
var numSquares = 6;
var mode = "hard";
title.textContent = pickedColor;

var colors = generateColors(numSquares);
var pickedColor = pickColor();


easy.addEventListener("click", function(){
  newGame(3, "easy");
});

hard.addEventListener("click", function(){
  newGame(6, "hard");
});

reset.addEventListener("click", function(){
  newGame(numSquares, mode);
});

for(var i = 0; i < numSquares; i++){
  squares[i].style.backgroundColor = colors[i]; 
  squares[i].addEventListener("click", function(){
    if (this.style.backgroundColor === pickedColor){
      messageDisplay.textContent = "correct";
      reset.textContent = "Play Again?";
      h1.style.backgroundColor = pickedColor;
      colorSquares();
    } else {
      this.style.backgroundColor =  "#232323";
      messageDisplay.textContent = "try again";
    }
  });
}

function newGame(num, f_mode){
  h1.style.backgroundColor = "steelblue";
  numSquares = num;
  mode = f_mode;
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  if (mode === "hard"){
    hard.classList.add("selected");
    easy.classList.remove("selected");
  } else {
    hard.classList.remove("selected");
    easy.classList.add("selected");
  }
  for(var i = 0; i < 6; i++){
    if((mode === "easy") && (i > 2)){
      squares[i].style.display = "none";
    } else {
      squares[i].style.backgroundColor = colors[i];    
      squares[i].style.display = "inline-block";
    }
  }
}

function colorSquares(){
  for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = pickedColor;
  }
}

function generateColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(generateRGB());
  }
  return arr;
}

function generateRGB(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
  var i = Math.floor(Math.random() * colors.length);
  return colors[i];
}
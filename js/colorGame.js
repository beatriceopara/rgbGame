var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
// six squares and our i is going to loop through array 0 to 5.
// this will loop through each square
// e.g. 0 is the first div and 1 is the second square div

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add inital colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked squares
    var clickedColor = (this.style.backgroundColor);
    //compare color to pickedColor
    // console.log(clickedColor, pickedColor) debug via comparing via console, add spaces after comma in string in return rgb;

    if (clickedColor === pickedColor) {
      //this text will pop up if the correct square is chosen
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    //fades out square when player picks the wrong square
    else {
      this.style.backgroundColor = "#232323";
      //this text will pop up if the incorrect square is chosen
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match give color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }

  //return array
  return arr;
}

function randomColor() {
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

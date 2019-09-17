var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
// six squares and our i is going to loop through array 0 to 5.
// this will loop through each square
// e.g. 0 is the first div and 1 is the second square div

var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add inital colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked squares
    var clickedColor = (this.style.backgroundColor);
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      //this text will pop up if the correct square is chosen
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
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

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

var numSquares = 6;
var colors = [];
var pickedColor;

// six squares and our i is going to loop through array 0 to 5.
// this will loop through each square
// e.g. 0 is the first div and 1 is the second square div

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //figure out many squares to shows
  //pick new Colors
  //pick a new pickColor
  //update page to reflect changes
  //modeButtons EventListener
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //this is a ternary. take 3 arguments and works/reads the same as a if/else statement
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // if(this.textContent === "Easy") {
      //   numSquares = 3;
      // } else {
      //  numSquares = 6;
      // }
      reset();
    });
  }
}

function setUpSquares(){
  //square EventListeners
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked squares
      var clickedColor = (this.style.backgroundColor);
      //compare color to pickedColor
      //console.log(clickedColor, pickedColor) debug via comparing via console, add spaces after comma in string in return rgb;

      if (clickedColor === pickedColor) {
        //this text will pop up if the correct square is chosen
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        resetButton.textContent = "Play Again?"
        h1.style.backgroundColor = clickedColor;
      }
      //fades out square when player picks the wrong square
      else {
        this.style.backgroundColor = "papayawhip";
        //this text will pop up if the incorrect square is chosen
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  //change colors of squares
  messageDisplay.textContent = "";
  //change the messageDisplay to show as empty until players click
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
    squares[i].style.display = "block";
    squares[i].style.backgroundColor = colors[i];
    }
    else {
    squares[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "#E56088";
}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//       squares[i].style.backgroundColor = colors[i];
//       squares[i].style.display = "block";
//     }
// });


resetButton.addEventListener("click", function() {
//DRYs UP CODE
reset();

// //generate all new Colors
// colors = generateRandomColors(numSquares);
// //pick new random color from array
// pickedColor = pickColor();
// //change colorDisplay to match picked colors
// colorDisplay.textContent = pickedColor;
// this.textContent = "New Colors";
// //change colors of squares
// messageDisplay.textContent = "";
// for(var i = 0; i < squares.length; i++){
//   squares[i].style.backgroundColor = colors[i];
//   };
// h1.style.backgroundColor = "#E56088";
})

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

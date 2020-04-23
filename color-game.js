console.log("hi,console user");
var color = generateRandomColor(6);
var h1 = document.querySelector("h1");

var pickedColor = pickColor();
var msgDisplay = document.querySelector("#msg");

var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;

var sq = document.querySelectorAll(".square");
for (var i = 0; i < sq.length; i++) {
  //Intial color to sq
  sq[i].style.background = color[i];

  //click events
  sq[i].addEventListener("click", function () {
    //grab color of clicked sq
    var sqColor = this.style.background;

    //compare to pickedColor
    if (sqColor == pickedColor) {
      msgDisplay.textContent = "Well Done!!";
      changeSqColor();
      h1.style.background = pickedColor;
      console.log("correct");
    } else {
      this.style.background = "#232323";
      msgDisplay.textContent = "Try Agaain";
      console.log(sqColor);
      console.log(pickedColor);
    }
  });
}
function changeSqColor() {
  for (var i = 0; i < sq.length; i++) {
    sq[i].style.background = pickedColor;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}
function generateRandomColor(n) {
  var randomColor = [];
  for (var i = 0; i < n; i++) {
    randomColor.push(colorRandom());
  }
  return randomColor;
}
function colorRandom() {
  //red
  var r = Math.floor(Math.random() * 256);
  //green
  var g = Math.floor(Math.random() * 256);
  //blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  console.log("clicked reset");
  color = generateRandomColor(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < sq.length; i++) {
    //Intial color to sq
    sq[i].style.background = color[i];
  }
});

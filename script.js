//For first dice

var dice1 = Math.floor(Math.random() * 6) + 1;
var randomized1 = "images/dice" + dice1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomized1);

//for second dice

var dice2 = Math.floor(Math.random() * 6) + 1;
var randomized2 = "images/dice" + dice2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomized2);

//if player one wins

if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "🚩player one wins ";
} //if player two wins
else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "player two wins🚩 ";
} // if Drew
else {
  document.querySelector("h1").innerHTML = "🏳️Drew🏳️";
}

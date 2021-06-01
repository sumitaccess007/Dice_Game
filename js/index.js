var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

// Change the Image as per random numbers
document.querySelector(".dice1-image").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".dice2-image").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2) {
   document.querySelector(".title h1").textContent = "Draw !";
} else if (randomNumber1 > randomNumber2) {
   document.querySelector(".title h1").innerHTML = "<img class='winner-image' src='./images/Winner.png' alt='Winner-Flag'> Player-1 Wins !";
} else {
   document.querySelector(".title h1").innerHTML = "Player-2 Wins ! <img class='winner-image' src='./images/Winner.png' alt='Winner-Flag'>";
}

var ball = document.getElementById("ball");
// Initial Values
var positionX = 0;
var positionY = 0;
var velocity = 30;
var reverseX = false;
var reverseY = false;

function randomColor() {
  return "#" + Math.random().toString(16).slice(2, 8).toUpperCase();;
}

function moveBall() {
  var Xmin = 0;
  var Xmax = window.innerWidth;
  var Ymin = 0;
  var Ymax = window.innerHeight;

  if (reverseX) {
    positionX = positionX - velocity;
  } else {
    positionX = positionX + velocity;
  }
  if (reverseY) {
    positionY = positionY - velocity;
  } else {
    positionY = positionY + velocity;
  }

  if (positionX + ball.clientWidth >= Xmax || positionX <= 0) {
    reverseX = !reverseX;
    ball.style.background = randomColor();
  }
  if (positionY + ball.clientHeight >= Ymax || positionY <= 0) {
    reverseY = !reverseY;
    ball.style.background = randomColor();
  }

  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";
}

setInterval(moveBall, 24);

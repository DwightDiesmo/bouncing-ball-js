var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball-1");

function moveBall() {
  var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;

  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
  }
  ball.style.left = positionX + "px";
  ball.style.top = positionY + "px";

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveBall, 100);

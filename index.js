document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("ping-pong-table");
  const paddle = document.getElementById("paddle");
  const ball = document.getElementById("ball");

  // here ballX and ballY will be helping us to set a starting point of ball
  // w.r.t table
  let ballX = 50; // distance of the ball from the left of the table
  let ballY = 50; // distance of the ball from the top of the table

  let dX = 2; // displacement factor in horizontal axis
  let dY = 2; // displacement factor in vertical axis

  ball.style.top = `${ballX}px`;
  ball.style.left = `${ballY}px`;
  setInterval(function exec() {
    ballX += dX;
    ballY += dY;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dX *= -1; // reverse horizontal direction
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dY *= -1; // reverse vertical direction
  }, 1);

  let paddleY = 0;
  let dPy = 5; // displacement of paddle in vertical direction

  document.addEventListener("keydown", (event) => {
    if (
      event.keyCode == 40 &&
      paddleY < table.offsetHeight - paddle.offsetHeight
    ) {
      paddleY += dPy;
    } else if (event.keyCode == 38 && paddleY > 0) {
      paddleY -= dPy;
    }
    paddle.style.top = `${paddleY}px`;
  });
});

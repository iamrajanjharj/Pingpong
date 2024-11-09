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

    //collision of the ball with the paddle

    if (
      ballX < paddle.offsetLeft + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dX *= -1;
    }

    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dX *= -1; // reverse horizontal direction
    if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dY *= -1; // reverse vertical direction
  }, 1);

  let paddleY = 0;
  let dPy = 10; // displacement of paddle in vertical direction

  document.addEventListener("keydown", (event) => {
    event.preventDefault(); // prevents the execution of default behavior
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

  document.addEventListener("mousemove", (event) => {
    let mouseDistanceFromTop = event.clientY; // this is the dist of the mouse from the top of the screen
    let distanceOfTableFromTop = table.offsetTop;

    let mousePointControl =
      mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight / 2;
    paddleY = mousePointControl;
    // if bottom of the paddle touches bottom of the table return
    if (paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight)
      return;

    paddle.style.top = `${paddleY}px`;
  });
});

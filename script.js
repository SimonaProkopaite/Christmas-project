let snowflakeInterval;
let spacePressed = false;

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !spacePressed) {
    spacePressed = true;

    snowflakeInterval = setInterval(() => {
      createSnowflake();
    }, 40);
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    spacePressed = false;
    clearInterval(snowflakeInterval);
  }
});

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';

  const size = Math.random() * 15 + 5;
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  const x = Math.random() * window.innerWidth;
  const y = 0;

  snowflake.style.left = `${x}px`;
  snowflake.style.top = `${y}px`;

  document.body.appendChild(snowflake);
}

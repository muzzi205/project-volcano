const canvas = document.getElementById("lavaGame");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const heatEl = document.getElementById("heat");
const heatFill = document.getElementById("heatFill");
const statusEl = document.getElementById("status");
const hudStatus = document.getElementById("hudStatus");
const startBtn = document.getElementById("startGame");
const pauseBtn = document.getElementById("pauseGame");
const resetBtn = document.getElementById("resetGame");

const GAME_WIDTH = 900;
const GAME_HEIGHT = 500;
const gameFrame = canvas.parentElement;

const keys = new Set();
let running = false;
let gameOver = false;
let won = false;
let score = 0;
let heat = 50;
let frame = 0;
let player;
let bombs;
let crystals;
let animationId;

function resizeCanvas() {
  const w = gameFrame.clientWidth;
  const h = gameFrame.clientHeight;
  const scale = Math.min(w / GAME_WIDTH, h / GAME_HEIGHT);
  canvas.style.width = `${Math.floor(GAME_WIDTH * scale)}px`;
  canvas.style.height = `${Math.floor(GAME_HEIGHT * scale)}px`;
  canvas.width = GAME_WIDTH;
  canvas.height = GAME_HEIGHT;
  draw();
}

function resetState() {
  player = { x: 90, y: 380, w: 38, h: 48, speed: 5 };
  bombs = [];
  crystals = [];
  score = 0;
  heat = 50;
  frame = 0;
  running = false;
  gameOver = false;
  won = false;
  updatePanel("Ready");
  draw();
}

function updatePanel(status) {
  scoreEl.textContent = score;
  const heatPct = Math.max(0, Math.min(100, Math.round(heat)));
  heatEl.textContent = `${heatPct}%`;
  heatFill.style.width = `${heatPct}%`;
  heatFill.classList.toggle("critical", heatPct >= 75);
  heatFill.classList.toggle("cooled", heatPct === 0);
  statusEl.textContent = status;
  hudStatus.textContent = status;
  let hudClass = "hud-pill";
  if (status === "Running") hudClass += " active";
  else if (status === "Paused") hudClass += " paused";
  else if (status === "You win!") hudClass += " win";
  hudStatus.className = hudClass;
}

function spawnBomb() {
  bombs.push({
    x: 160 + Math.random() * (canvas.width - 200),
    y: -30,
    r: 13 + Math.random() * 13,
    vy: 3.2 + Math.random() * 2.2,
    vx: -1.2 + Math.random() * 2.4
  });
}

function spawnCrystal() {
  crystals.push({
    x: 80 + Math.random() * (canvas.width - 140),
    y: 160 + Math.random() * 230,
    r: 12,
    pulse: Math.random() * Math.PI
  });
}

function rectCircleHit(rect, circle) {
  const nearestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.w));
  const nearestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.h));
  const dx = circle.x - nearestX;
  const dy = circle.y - nearestY;
  return dx * dx + dy * dy < circle.r * circle.r;
}

function movePlayer() {
  if (keys.has("ArrowLeft") || keys.has("a")) player.x -= player.speed;
  if (keys.has("ArrowRight") || keys.has("d")) player.x += player.speed;
  if (keys.has("ArrowUp") || keys.has("w")) player.y -= player.speed;
  if (keys.has("ArrowDown") || keys.has("s")) player.y += player.speed;

  player.x = Math.max(20, Math.min(canvas.width - player.w - 20, player.x));
  player.y = Math.max(130, Math.min(canvas.height - player.h - 28, player.y));
}

function update() {
  if (!running || gameOver) return;
  frame += 1;
  heat += 0.045;
  movePlayer();

  if (frame % 42 === 0) spawnBomb();
  if (frame % 120 === 0 && crystals.length < 4) spawnCrystal();

  bombs.forEach((bomb) => {
    bomb.x += bomb.vx;
    bomb.y += bomb.vy + heat / 75;
  });
  bombs = bombs.filter((bomb) => bomb.y < canvas.height + 60);

  crystals.forEach((crystal) => {
    crystal.pulse += 0.07;
  });

  for (const bomb of bombs) {
    if (rectCircleHit(player, bomb)) {
      gameOver = true;
      running = false;
      updatePanel("Erupted");
      draw();
      return;
    }
  }

  crystals = crystals.filter((crystal) => {
    if (rectCircleHit(player, crystal)) {
      score += 10;
      heat = Math.max(0, heat - 7);
      if (heat <= 0) {
        won = true;
        gameOver = true;
        running = false;
        updatePanel("You win!");
        draw();
      }
      return false;
    }
    return true;
  });

  if (gameOver) return;

  if (heat >= 100) {
    gameOver = true;
    running = false;
    updatePanel("Too hot");
    draw();
    return;
  }

  score += frame % 30 === 0 ? 1 : 0;
  updatePanel("Running");
}

function drawBackground() {
  const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
  sky.addColorStop(0, "#182b34");
  sky.addColorStop(0.55, "#3b1916");
  sky.addColorStop(1, "#100c0a");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 176, 0, 0.18)";
  ctx.beginPath();
  ctx.arc(760, 82, 56, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#221d19";
  ctx.beginPath();
  ctx.moveTo(220, canvas.height - 55);
  ctx.lineTo(450, 116);
  ctx.lineTo(690, canvas.height - 55);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#352920";
  ctx.beginPath();
  ctx.moveTo(360, canvas.height - 55);
  ctx.lineTo(508, 140);
  ctx.lineTo(790, canvas.height - 55);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#ffb000";
  ctx.beginPath();
  ctx.ellipse(478, 145, 68, 20, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#f05a28";
  ctx.fillRect(468, 155, 18, 255);
  ctx.fillRect(525, 174, 15, 204);
  ctx.fillRect(410, 190, 13, 152);

  ctx.fillStyle = "#ff6a2a";
  ctx.fillRect(0, canvas.height - 34, canvas.width, 34);
  ctx.fillStyle = "#ffb000";
  for (let x = 0; x < canvas.width; x += 90) {
    ctx.beginPath();
    ctx.ellipse(x + ((frame * 2) % 90), canvas.height - 18, 34, 7, 0, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPlayer() {
  ctx.fillStyle = "#5ed5d1";
  ctx.fillRect(player.x + 8, player.y, player.w - 16, 16);
  ctx.fillStyle = "#fff7e6";
  ctx.fillRect(player.x, player.y + 14, player.w, player.h - 14);
  ctx.fillStyle = "#3b6a54";
  ctx.fillRect(player.x + 5, player.y + 24, player.w - 10, 18);
  ctx.fillStyle = "#16130f";
  ctx.fillRect(player.x + 9, player.y + 46, 8, 10);
  ctx.fillRect(player.x + player.w - 17, player.y + 46, 8, 10);
}

function drawBombs() {
  bombs.forEach((bomb) => {
    const glow = ctx.createRadialGradient(bomb.x, bomb.y, 2, bomb.x, bomb.y, bomb.r * 2.2);
    glow.addColorStop(0, "#fff1a6");
    glow.addColorStop(0.38, "#ffb000");
    glow.addColorStop(1, "rgba(240, 90, 40, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(bomb.x, bomb.y, bomb.r * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#a72222";
    ctx.beginPath();
    ctx.arc(bomb.x, bomb.y, bomb.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawCrystals() {
  crystals.forEach((crystal) => {
    const size = crystal.r + Math.sin(crystal.pulse) * 2;
    ctx.fillStyle = "#5ed5d1";
    ctx.beginPath();
    ctx.moveTo(crystal.x, crystal.y - size);
    ctx.lineTo(crystal.x + size, crystal.y);
    ctx.lineTo(crystal.x, crystal.y + size);
    ctx.lineTo(crystal.x - size, crystal.y);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#fff7e6";
    ctx.stroke();
  });
}

function drawOverlay() {
  if (!running && !gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.34)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff7e6";
    ctx.font = "800 34px Inter";
    ctx.textAlign = "center";
    ctx.fillText("Press Start Mission", canvas.width / 2, canvas.height / 2);
  }

  if (gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = "center";

    if (won) {
      ctx.fillStyle = "#5ed5d1";
      ctx.font = "800 38px Inter";
      ctx.fillText("You cooled the volcano!", canvas.width / 2, canvas.height / 2 - 12);
      ctx.fillStyle = "#fff7e6";
      ctx.font = "700 20px Inter";
      ctx.fillText(`Final score: ${score} — Reset to play again`, canvas.width / 2, canvas.height / 2 + 28);
    } else {
      ctx.fillStyle = "#ffb000";
      ctx.font = "800 38px Inter";
      ctx.fillText("Eruption over", canvas.width / 2, canvas.height / 2 - 12);
      ctx.fillStyle = "#fff7e6";
      ctx.font = "700 20px Inter";
      ctx.fillText("Reset to try again", canvas.width / 2, canvas.height / 2 + 28);
    }
  }
}

function draw() {
  drawBackground();
  drawCrystals();
  drawBombs();
  drawPlayer();
  drawOverlay();
}

function loop() {
  update();
  draw();
  animationId = requestAnimationFrame(loop);
}

startBtn.addEventListener("click", () => {
  if (gameOver) resetState();
  if (!running) {
    running = true;
    updatePanel("Running");
    if (!animationId) loop();
  }
});

pauseBtn.addEventListener("click", () => {
  running = false;
  updatePanel(gameOver ? statusEl.textContent : "Paused");
});

resetBtn.addEventListener("click", () => {
  resetState();
});

window.addEventListener("keydown", (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d", " "].includes(key)) {
    event.preventDefault();
    keys.add(key);
  }
});

window.addEventListener("keyup", (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  keys.delete(key);
});

window.addEventListener("resize", resizeCanvas);
document.addEventListener("wheel", (event) => event.preventDefault(), { passive: false });
gameFrame.addEventListener("click", () => gameFrame.focus());

resetState();
resizeCanvas();
loop();

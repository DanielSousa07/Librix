export function startLibrasRain() {
  const canvas = document.getElementById("libras-rain");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth; // Vao servir pra definir a largura e altura total do navegador
  canvas.height = window.innerHeight;

  const librasChars = [
    "🤟",
    "👌",
    "✌️",
    "👍",
    "👎",
    "🤙",
    "🫰",
    "👐",
    "✋",
    "👉",
    "👈",
    "☝️",
  ];


  const fontSize = 28;
  const columns = Math.floor(canvas.width / fontSize);

  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.00)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#2C7AED";
    ctx.font = `${fontSize}px Arial`;

    for (let i = 0; i < columns; i++) {
        const char = librasChars[Math.floor(Math.random() * librasChars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
        drops[i] ++
    }
  }

  setInterval(draw, 50);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })
}
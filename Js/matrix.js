const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  // Ocupa a tela inteira
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // Letras aleatórias (pode trocar por "01" ou código C)
  const letras = 'RenanCJavaPythonSQL1234567890#<>{}();';
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = Array(Math.floor(columns)).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ffff'; // cor do texto
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = letras.charAt(Math.floor(Math.random() * letras.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);

  // Reajusta quando muda o tamanho da tela
  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
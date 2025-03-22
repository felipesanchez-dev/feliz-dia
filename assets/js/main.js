document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});

const audioEl = document.querySelector("audio");
const muteBtn = document.getElementById("mute-btn");
const pauseBtn = document.getElementById("pause-btn");
const restartBtn = document.getElementById("restart-btn");

muteBtn.addEventListener("click", () => {
  audioEl.muted = !audioEl.muted;
  muteBtn.textContent = audioEl.muted ? "Reproducir" : "Silenciar";
});

pauseBtn.addEventListener("click", () => {
  if (audioEl.paused) {
    audioEl.play();
    pauseBtn.textContent = "Pausar";
  } else {
    audioEl.pause();
    pauseBtn.textContent = "Reanudar";
  }
});

restartBtn.addEventListener("click", () => {
  audioEl.currentTime = 0;
  audioEl.play();
});

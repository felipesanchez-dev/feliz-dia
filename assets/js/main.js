document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
  });
});

const audioEl = document.querySelector("audio");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  audioEl.muted = !audioEl.muted;
  muteBtn.textContent = audioEl.muted ? "Reproducir" : "Silenciar";
});

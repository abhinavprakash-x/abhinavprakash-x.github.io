document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Tiny pixel-art nod to CHIP-8, drawn with DOM elements rather than an image.
const sprite = [
  "00111100",
  "01111110",
  "11011011",
  "11111111",
  "00100100",
  "01000010"
];
const grid = document.getElementById("pixel-grid");
sprite.join("").split("").forEach(bit => {
  const px = document.createElement("span");
  px.className = "pixel" + (bit === "1" ? " on" : "");
  grid.appendChild(px);
});

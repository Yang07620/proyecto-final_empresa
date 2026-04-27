const btn = document.getElementById("toggleBtn");
const barra = document.getElementById("barra");

btn.addEventListener("click", () => {
    barra.classList.toggle("activa");
});
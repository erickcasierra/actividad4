// Actividad práctica III - 5 eventos diferentes sobre la página web

// EVENTO 1: click - cambia entre modo claro y oscuro
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", () => {
  const oscuro = document.body.classList.toggle("oscuro");
  btnTema.textContent = oscuro ? "Activar modo claro" : "Activar modo oscuro";
});

// EVENTO 2: mouseover / mouseout - resalta la tarjeta y muestra un consejo
const mensajeTarjeta = document.getElementById("mensajeTarjeta");
document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
  tarjeta.addEventListener("mouseover", () => {
    tarjeta.classList.add("activa");
    mensajeTarjeta.textContent = tarjeta.dataset.mensaje;
  });
  tarjeta.addEventListener("mouseout", () => {
    tarjeta.classList.remove("activa");
    mensajeTarjeta.textContent = "Pasa el cursor sobre una tarjeta.";
  });
});

// EVENTO 3: keyup - cuenta caracteres y evalúa la longitud de la contraseña
const clave = document.getElementById("clave");
const fuerza = document.getElementById("fuerza");
clave.addEventListener("keyup", () => {
  const n = clave.value.length;
  let nivel = "débil";
  let clase = "mal";
  if (n >= 12) { nivel = "buena longitud"; clase = "ok"; }
  else if (n >= 8) { nivel = "media"; clase = "aviso"; }
  fuerza.textContent = n + " caracteres: " + nivel;
  fuerza.className = "aviso " + clase;
});

// EVENTO 4: submit - valida el formulario antes de enviarlo
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value);
  nombre.classList.toggle("error", nombre.value.trim() === "");
  correo.classList.toggle("error", !correoValido);
  if (nombre.value.trim() === "" || !correoValido) {
    resultado.textContent = "Escribe tu nombre y un correo válido.";
    resultado.className = "aviso mal";
    return;
  }
  resultado.textContent = "Reporte enviado, " + nombre.value.trim() + ".";
  resultado.className = "aviso ok";
  formulario.reset();
});

// EVENTO 5: scroll - barra de progreso de lectura
const progreso = document.getElementById("progreso");
window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const avance = total > 0 ? (window.scrollY / total) * 100 : 0;
  progreso.style.width = avance + "%";
});

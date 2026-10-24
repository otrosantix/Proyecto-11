const cookie = document.getElementById("cookie");
const botonAceptar = document.getElementById("cookie-aceptar");
const botonCerrar = document.getElementById("cookie-cerrar");

if (localStorage.getItem("cookiesAceptadas") !== "true") {
  cookie.hidden = false;
}

botonAceptar.addEventListener("click", function () {
  localStorage.setItem("cookiesAceptadas", "true");
  cookie.hidden = true;
});

botonCerrar.addEventListener("click", function () {
  cookie.hidden = true;
});
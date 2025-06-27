// Fecha de las vacaciones de invierno (modificable según la región)
const vacaciones = new Date("2025-07-14T00:00:00");

function actualizarCuentaRegresiva() {
  const ahora = new Date();
  const diferencia = vacaciones - ahora;

  if (diferencia <= 0) {
    document.getElementById("countdown").textContent = "¡Ya empezaron las vacaciones!";
    return;
  }

  const segundosTotales = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundosTotales / (60 * 60 * 24));
  const horas = Math.floor((segundosTotales % (60 * 60 * 24)) / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  document.getElementById("countdown").textContent =
    `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para las vacaciones de invierno.`;
}

// Ejecutar cada segundo
setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva(); // Ejecutar inmediatamente al cargar
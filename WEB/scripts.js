// Obtener referencia al formulario
const form = document.querySelector('form');

// Escuchar el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto
  
  // Validar los campos del formulario
  const nombre = form.nombre.value.trim();
  const correo = form.correo.value.trim();
  const mensaje = form.mensaje.value.trim();
  
  if (nombre === '' || correo === '' || mensaje === '') {
    // Mostrar una alerta al usuario si algún campo está vacío
    alert('Por favor, completa todos los campos del formulario.');
  } else {
    // Enviar el formulario si todos los campos están completos
    form.submit();
  }
});

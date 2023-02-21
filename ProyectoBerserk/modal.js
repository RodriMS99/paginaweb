// const loginBtn = document.getElementById('login-btn');
// const loginModal = document.getElementById('login-modal');
// const loginForm = document.getElementById('login-form');

// loginBtn.addEventListener('click', () => {
//   loginModal.style.display = 'block';
// });

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // Aquí puedes agregar la lógica de validación y autenticación
//   // y cerrar el modal si el inicio de sesión es exitoso.
//   loginModal.style.display = 'none';
// });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.modal').modal();
});
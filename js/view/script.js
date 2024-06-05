document.querySelectorAll('#opcoes2 input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        document.querySelectorAll('#opcoes2 input[type="checkbox"]').forEach(function(otherCheckbox) {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      } else {
      }
    });
});

document.getElementById('voltarButton').addEventListener('click', function() {
  window.location.href = 'perfil.html';
});

// Event listener para o formulário de atualização do usuário
const formAtualizacao = document.getElementById('formUsuario');

formAtualizacao.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;  

  atualizarUsuario(email, senha);
});
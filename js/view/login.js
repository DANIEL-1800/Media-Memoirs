const botaoGoogle = document.getElementById('loginGoogle')

botaoGoogle.addEventListener('click', (event) => {
    event.preventDefault() //evita o recarregamento da página
    loginGoogle()
})

const formLogin = document.getElementById('formLogin')

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    const nomeUsuario = document.getElementById('nomeUsuario').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    loginFirebase(nomeUsuario, email, senha)
})
const formUsuario = document.getElementById('formUsuario')

    formUsuario.addEventListener('submit', (event) => {
        event.preventDefault()

        const email = document.getElementById('email').value
        const senha = document.getElementById('senha').value

        criarUsuario(email, senha)
    }        
    
)
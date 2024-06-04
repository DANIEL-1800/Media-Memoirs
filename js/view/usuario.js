const formUsuario = document.getElementById('formUsuario')

    formUsuario.addEventListener('submit', (event) => {
        event.preventDefault()

        const nomeUsuario  = document.getElementById('nomeUsuario').value
        const email = document.getElementById('email').value
        const senha = document.getElementById('senha').value

        novoUsuario(nomeUsuario, email, senha)
    }        
    
)
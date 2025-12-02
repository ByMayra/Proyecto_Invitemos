class usuario {

    constructor(id_cliente, nombre, apellido, correo, telefono, direccion, fecha_registro, password) {

        this.id_cliente = id_cliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.fecha_registro = fecha_registro;
        this.password = password;


    }

}

document.getElementById('loginbutton').addEventListener('click', () => {
    Validarcredenciales()
});

function Validarcredenciales() {

    const userInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;
    // console.log(userInput)
    // console.log(passInput)

    console.log("Intentando loguear con:", userInput);

    if (!userInput || !passInput) {
        alert('Por favor ingresa usuario y contraseña');
        return;
    }

    fetch('assets/php/loguin.php')
        .then(res => res.json())
        .then(data => {
            let encontrado = false;
            let rol = 'nada';
            
            for (let i = 0; i < data.length; i++) {
                const users = data[i];

                console.log(users)
                if (users.correo === userInput && users.password === passInput) {
                    encontrado = true;
                    break;
                }
            }

            console.log(rol)
            if (encontrado) {
                alert('Inicio de sesión correcto');
                window.location.href = "index_log.html"

            } else {
                alert('Email o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error('Error en la petición:', error);
            alert('Hubo un problema al validar las credenciales');
            return false
        });

}





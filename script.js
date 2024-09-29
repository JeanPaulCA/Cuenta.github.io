document.getElementById("btn__registrarse").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

//Declaración de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}


//..............................................................
    //..........................................................
        //......................................................


// Lista de usuarios predefinidos
const usuariosPredefinidos = [
    {
        nombre: "AndreaMA",
        email: "Andrea@example.com",
        password: "password123" // **Nota:** En aplicaciones reales, las contraseñas deben estar hasheadas
    },
    {
        nombre: "EjemploSD",
        email: "Eje@example.com",
        password: "password456"
    },
    {
        nombre: "DuvalDB",
        email: "Duval@example.com",
        password: "password789"
    }
];

// Manejar el inicio de sesión
formulario_login.addEventListener("submit", function(e){
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los datos del formulario
    const email = formulario_login.querySelector('input[type="text"]').value.trim();
    const password = formulario_login.querySelector('input[type="password"]').value.trim();

    // Validar que todos los campos estén completos
    if(email === "" || password === ""){
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Verificar las credenciales contra los usuarios predefinidos
    const usuario = usuariosPredefinidos.find(user => user.email === email && user.password === password);

    if(usuario){
        alert(`Bienvenido, ${usuario.nombre}!`);
        // Redirigir al usuario a otra página
        window.location.href = "home.html";
    } else{
        alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }

    // Limpiar el formulario
    formulario_login.reset();
});


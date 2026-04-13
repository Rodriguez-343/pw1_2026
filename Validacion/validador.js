function validar() {
    const correo = document.getElementById("correo").value.trim();
    const clave = document.getElementById("clave").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {
        alert("Ingrese el correo");
        return;
    }


    if (!emailRegex.test(correo)) {
        alert("Correo no válido");
        return;
    }


    if (clave === "") {
        alert("Ingrese la clave");
        return;
    }

    if (clave.length < 6) {
        alert("La clave debe tener al menos 6 caracteres");
        return;
    }

    alert("Login válido 🚀");
}
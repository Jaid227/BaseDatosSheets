
const url = "https://script.google.com/macros/s/AKfycbw81q43tEAR5YKmh6sd8_eEeFh9ONwoh41mRXDQFo5Xc-H53uD1DBYKj2nQnsG4wiMB/exec";

document.getElementById("miFormulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    let datos = {
        nombre: this.nombre.value,
        correo: this.correo.value,
        telefono: this.telefono.value
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(datos)
    })
    .then(res => res.text())
    .then(data => {
        document.getElementById("mensaje").innerText = "Enviado correctamente ✅";
        document.getElementById("miFormulario").reset();
    })
    .catch(err => {
        document.getElementById("mensaje").innerText = "Error al enviar ❌";
    });
});
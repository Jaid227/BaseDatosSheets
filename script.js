
const url = "https://script.google.com/macros/s/AKfycbzWFVIs_bkitHiFejABZL9laNW9NbuN_BwjGzArRN_JtXSt7-sBMNmZeiGtu6qepWaT/exec";

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


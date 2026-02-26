
const url = "https://script.google.com/macros/s/AKfycbxcIEhc1StNvmCDvKlooBFS3i9loktnzgzw_E0ubJK_dO3z-VR7-FRU184FbFSZMTef/exec";

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

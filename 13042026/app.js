function generarQR() {
    let input1 = document.getElementById('nombre').value.trim();
    let input2 = document.getElementById('email').value.trim();
    let input3 = document.getElementById('telefono').value.trim();
    let input4 = document.getElementById('institucion').value.trim();
    let textoCompleto = input1 + "," + input2 + "," + input3 + "," + input4;

    console.log(textoCompleto);


    if(textoCompleto === ",,,,") {
        alert("Por favor, ingresa al menos un dato para generar el QR.");
        return;
    }
    //https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=%22413112576dadasdasd%22
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + encodeURIComponent(textoCompleto);

    let qrImg = document.createElement("img");
    qrImg.src = url;
    qrImg.alt = "QR Code";
    
   document.getElementById("qr").appendChild(qrImg);



}

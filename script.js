let mensajes = [
    "Dale un ❤️ a la historia de tu crush",
    "Envía este link a alguien 💌",
    "Postea una story con la cancion que le dedicarias🎤",
    "Comparte tu mejor recuerdo de San Valentín 💕",
    "Di algo bonito sobre la persona que te gusta 💖",
    "Haz un cumplido sincero a alguien 🌸"
];

function girarRuleta() {
    let ruleta = document.getElementById("ruleta");
    let mensaje = document.getElementById("mensaje");
    let giro = Math.floor(3600 + Math.random() * 360); // Rota entre 3600 y 3960 grados
    ruleta.style.transform = `rotate(${giro}deg)`;
    
    setTimeout(() => {
        let anguloFinal = giro % 360;
        let index = Math.floor(anguloFinal / 60);
        mensaje.innerText = mensajes[index];
    }, 4000); // Espera la animación antes de mostrar el mensaje
}
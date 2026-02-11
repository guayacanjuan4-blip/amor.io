/* TEXTO ESCRITO */
const text = `
Feliz San Valentín, mi amorcito bello.
Sé que en estos momentos no puedo estar presente para darte un detalle,
pero te entrego esto con todo mi esfuerzo y mi corazón.

Gracias por compartir tus días conmigo,
gracias por estar aquí,
gracias por llenarme de alegría.

No sabes lo lindo que es tenerte en mi vida.
Me completas, literalmente.
Eres esa persona que una vez le pedí a Dios.

Te amo, Greylis Patricia.
💖
Feliz San Valentín.
`;
const audio = document.getElementById("audio");

function playMusic() {
  audio.play();
}


let i = 0;
const speed = 40;
const paragraph = document.getElementById("text");

function typeWriter() {
  if (i < text.length) {
    paragraph.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

/* CORAZONES */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️TE AMO❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 50 + 50 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

setInterval(createHeart, 300);

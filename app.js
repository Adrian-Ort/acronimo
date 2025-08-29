// Mapa de datos curiosos
const DATOS = {
  americano: "Los Steelers son uno de los equipos más históricos y exitosos de la NFL, conocidos por sus seis victorias de Super Bowl, su icónico logo de Steelmark en un solo casco y su legendaria defensa Cortina de Acero de los 70.",
  darius: "Darius es el hermano mayor del campeón Draven y creció huérfano junto a él en la ciudad portuaria de Basilich, luchando para sobrevivir. También tiene una hija llamada Invetia.",
  rammstein: "La banda comenzó a usar pirotecnia porque Till Lindemann, el cantante, se aburría cuando no le tocaba cantar, y la banda buscaba constantemente innovar en sus puestas en escena.",
  izuku: "Bakugo lo llamó Deku, un juego de palabras con su nombre que suena similar a persona inútil en japonés, debido a que no tenía un Quirk. Sin embargo, Deku reinterpretó el nombre para que significara eres capaz o nunca te rindas, y este es un significado que se le asocia en el anime.",
  alemania: "Alemania es cuna de la imprenta de Gutenberg y de compositores como Beethoven y Bach.",
  nico: "Es la única de los Piratas de Sombrero de Paja que puede leer los Poneglyphs y fue la primera en tener una recompensa de más de 79 millones de Beli en su infancia."
};

// Un único manejador para todos los botones del bloque
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".fact-btn");
  if (!btn) return;

  const key = btn.dataset.key;     // lee el data-key del botón
  const dato = DATOS[key];         // busca el dato curioso
  if (dato) {
    alert(dato);
  }
});

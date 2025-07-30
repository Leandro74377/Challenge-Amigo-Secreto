// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim(); // Eliminamos espacios en blanco

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array de amigos
  amigos.push(nombre);
  console.log("Lista de amigos:", amigos); // Solo para verificar en consola

  // Limpiar el campo de entrada
  input.value = "";
  mostrarAmigos();
}
function mostrarAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo amigos
  for (let i = 0; i < amigos.length; i++) {
    // Crear un nuevo elemento <li>
    const li = document.createElement("li");
    li.textContent = amigos[i];

    // Agregar el <li> a la lista
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  // Validar que el array no esté vacío
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre correspondiente
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el elemento con id "resultadoSorteo"
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
  
  const lista = document.getElementById("listaAmigos");
  lista.style.display = "none"; 
}

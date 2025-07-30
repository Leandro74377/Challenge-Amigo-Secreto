# Challenge-Amigo-Secreto
# 🎉 Sorteador de Amigos

Una pequeña aplicación web en HTML, CSS y JavaScript puro que permite:

- Agregar nombres a una lista de amigos.
- Mostrar la lista actual de amigos.
- Sortear aleatoriamente uno de los nombres.
- Validar entradas vacías y evitar duplicados visuales.

## 🧩 Características

- Validación de campos vacíos al agregar nombres.
- Lista visual de amigos agregados.
- Sorteo aleatorio con `Math.random()` y `Math.floor()`.
- Resultados del sorteo mostrados dinámicamente.
  
## 📁 Estructura del proyecto

## 🚀 Cómo usarlo

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador.
3. Ingresa nombres en el campo y haz clic en "Agregar amigo".
4. Haz clic en "Sortear amigo" para elegir uno al azar.

## 🧠 Tecnologías utilizadas

- HTML5
- CSS3 (opcional, si se personaliza)
- JavaScript Vanilla (puro)

## 💡 Ejemplo de uso

```html
<input type="text" id="nombreInput" placeholder="Escribe un nombre">
<button onclick="agregarAmigo()">Agregar amigo</button>
<ul id="listaAmigos"></ul>
<button onclick="sortearAmigo()">Sortear amigo</button>
<p id="resultadoSorteo"></p>

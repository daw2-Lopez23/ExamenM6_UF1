const personajes = [
    {
      nombre: "Albert Einstein",
      frase: "La imaginación es más importante que el conocimiento.",
      imagen: "imagenes/einstein.jpg"
    },
    {
      nombre: "Martin Luther King Jr.",
      frase: "Tengo un sueño.",
      imagen: "imagenes/king.jpg"
    },
    {
        nombre: "Mahatma Gandhi",
        frase: "Sé el cambio que quieres ver en el mundo.",
        imagen: "imagenes/gandhi.jpg"
    },
    {
        nombre: "William Shakespeare",
        frase: "Ser o no ser, esa es la cuestión.",
        imagen: "imagenes/shakespeare.jpg"
    },
    {
        nombre: "Marilyn Monroe",
        frase: "Dale a una chica los zapatos adecuados y conquistará el mundo.",
        imagen: "imagenes/monroe.jpg"
    },
    {
        nombre: "Abraham Lincoln",
        frase: "El gobierno del pueblo, por el pueblo y para el pueblo no perecerá de la Tierra.",
        imagen: "imagenes/lincoln.jpg"
    },
    {
        nombre: "Winston Churchill",
        frase: "Nunca en la historia de la humanidad tantos le deben tanto a tan pocos.",
        imagen: "imagenes/churchill.jpg"
    },
    {
        nombre: "Coco Chanel",
        frase: "La moda pasa, el estilo permanece.",
        imagen: "imagenes/chanel.jpg"
    },
    {
        nombre: "Nelson Mandela",
        frase: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        imagen: "imagenes/mandela.jpg"
    },
    {
        nombre: "Steve Jobs",
        frase: "Innovación es lo que distingue a un líder de un seguidor.",
        imagen: "imagenes/jobs.jpg"
    },
    {
        nombre: "Audrey Hepburn",
        frase: "La belleza es ser la mejor versión de ti mismo por dentro y por fuera.",
        imagen: "imagenes/hepburn.jpg"
    },
    {
        nombre: "Mark Twain",
        frase: "El informe de mi muerte ha sido muy exagerado.",
        imagen: "imagenes/twain.jpg"
    },

    
];
  
  document.addEventListener("DOMContentLoaded", function() {

    const selectPersonajes = document.getElementById("personajes");
    const botonVerPersonaje = document.getElementById("verPersonaje");
    const tarjeta = document.getElementById("tarjeta");
    const imagenPersonaje = document.getElementById("imagenPersonaje");
    const nombrePersonaje = document.getElementById("nombrePersonaje");
    const fraseCelebre = document.getElementById("fraseCelebre");
    const buscador = document.getElementById("buscador");
    const botonBuscarFrase = document.getElementById("buscarFrase");
    const fraseColor= document.getElementById("fraseColor");
    const momentoConsulta = document.getElementById("momentoConsulta");
    


    function mostrarPersonaje() {
        const seleccion = selectPersonajes.value;
        // Se busca el personaje seleccionado en el arreglo de personajes
        const personajeSeleccionado = personajes.find(personaje => personaje.nombre === seleccion);
        // Se actualizan los elementos HTML con la información del personaje
        imagenPersonaje.src = personajeSeleccionado.imagen;
        nombrePersonaje.innerHTML = personajeSeleccionado.nombre;
        fraseCelebre.innerHTML = personajeSeleccionado.frase;
        tarjeta.classList.remove("hidden"); // Se muestra la tarjeta
        // Se registra el momento de la consulta
        const ahora = new Date();
        momentoConsulta.innerHTML = `Consulta realizada a las ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;
    }
    
      // Función para buscar y marcar las coincidencias en la frase del personaje
      function buscarFrase() {
        const palabraBuscada = new RegExp(buscador.value, 'gi'); // Expresión regular para búsqueda global insensible a mayúsculas/minúsculas
        // Se busca y marca las coincidencias en la frase
        const fraseMarcada = fraseCelebre.innerHTML.replace(palabraBuscada, match => `<span class="bg-primary text-light">${match}</span>`);
        // Se actualiza el elemento HTML con la frase marcada
        fraseColor.innerHTML = fraseMarcada;
        // Se registra el momento de la consulta
        const ahora = new Date();
        momentoConsulta.innerHTML = `Consulta realizada a las ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;
    }

    botonVerPersonaje.addEventListener("click", mostrarPersonaje)
    botonBuscarFrase.addEventListener("click", buscarFrase);
});
  
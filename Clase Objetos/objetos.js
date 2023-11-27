// Definimos una función constructora para los estudiantes
function Estudiante(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }
  
  // Agregamos un método al prototype para mostrar la información del estudiante
  Estudiante.prototype.mostrarInfo = function () {
    return `${this.nombre}, ${this.edad} años, ${this.curso}`;
  };
  
  // Función para agregar un estudiante al formulario y mostrarlo en la lista
  function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const curso = document.getElementById('curso').value;
  
    // Creamos una instancia de Estudiante usando el constructor
    const nuevoEstudiante = new Estudiante(nombre, edad, curso);
  
    // Mostramos la información en la consola y en la lista HTML
    console.log(nuevoEstudiante.mostrarInfo());
  
    const lista = document.getElementById('studentList');
    const listItem = document.createElement('li');
    listItem.textContent = nuevoEstudiante.mostrarInfo();
    lista.appendChild(listItem);
  }
  
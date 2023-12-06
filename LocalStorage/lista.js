// Función para cargar y mostrar los pedidos
function mostrarPedidos() {
    const listaPedidos = document.getElementById('listaPedidos');
    listaPedidos.innerHTML = '';

    // Obtener pedidos del localStorage o inicializar un array vacío
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Filtrar pedidos completados si está activada la opción
    const mostrarCompletados = document.getElementById('filtrarCompletados').checked;
    const pedidosFiltrados = mostrarCompletados ? pedidos.filter(pedido => pedido.completado) : pedidos;

    // Mostrar cada pedido en la lista
    pedidosFiltrados.forEach((pedido, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${pedido.producto} - Cantidad: ${pedido.cantidad} (${pedido.completado ? 'Completado' : 'Pendiente'})`;

      // Botón para marcar como completado o pendiente
      const button = document.createElement('button');
      button.textContent = pedido.completado ? 'Marcar como Pendiente' : 'Marcar como Completado';
      button.onclick = () => marcarComoCompletado(index);

      // Botón para eliminar el pedido
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.onclick = () => eliminarPedido(index);

      listItem.appendChild(button);
      listItem.appendChild(deleteButton);
      listaPedidos.appendChild(listItem);
    });
  }

  // Función para cambiar el estado de completado de un pedido
  function marcarComoCompletado(index) {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos[index].completado = !pedidos[index].completado;
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    mostrarPedidos();
  }

  // Función para eliminar un pedido
  function eliminarPedido(index) {
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.splice(index, 1); // Eliminar el pedido en el índice especificado
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    mostrarPedidos();
  }

  // Función para filtrar y mostrar pedidos
  function filtrarPedidos() {
    mostrarPedidos();
  }

  // Cargar y mostrar pedidos al cargar la página
  mostrarPedidos();
function agregarPedido() {
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    // Obtener pedidos existentes del localStorage o inicializar un array vacío
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    // Agregar nuevo pedido al array
    pedidos.push({ producto, cantidad, completado: false });

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    // Limpiar el formulario
    document.getElementById('pedidoForm').reset();
  }
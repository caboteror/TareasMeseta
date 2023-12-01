// Simulación de datos de ubicación en tiempo real
const ubicaciones = [
    { latitud: 40.7128, longitud: -74.0060 },
    { latitud: 34.0522, longitud: -118.2437 },
    { latitud: 41.8781, longitud: -87.6298 },
    // Agrega más ubicaciones según sea necesario
];

function inicializarMapa() {
    const mapa = L.map('mapa').setView([ubicaciones[0].latitud, ubicaciones[0].longitud], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

    for (const ubicacion of ubicaciones) {
        L.marker([ubicacion.latitud, ubicacion.longitud]).addTo(mapa);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarMapa();
});

function realizarCompra() {
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const cantidad = document.getElementById('cantidad').value;

    // Crear un nuevo elemento de lista con los detalles de la compra
    const nuevaCompra = document.createElement('li');
    nuevaCompra.textContent = `Destino: ${destino}, Fecha: ${fecha}, Cantidad: ${cantidad}`;

    // Agregar el elemento de lista a la lista de compras
    const listaCompras = document.getElementById('listaCompras');
    listaCompras.appendChild(nuevaCompra);

    // Limpiar el formulario después de agregar la compra
    document.getElementById('compraForm').reset();
}

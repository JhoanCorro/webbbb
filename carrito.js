let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });
    document.getElementById('total-carrito').textContent = total.toFixed(2);
    document.getElementById('carrito').style.display = 'block';
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
    document.getElementById('carrito').style.display = 'none';
}

function pagar() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    alert(`Compra realizada con éxito. Total a pagar: $${total.toFixed(2)}`);
    vaciarCarrito();
}

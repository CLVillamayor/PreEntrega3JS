
const menu = [
    { id: 0,  nombre: "Pizza", precio: 10000 },
    { id: 1,  nombre: "Milanesa", precio: 5000 },
    { id: 2,  nombre: "Hamburguesa", precio: 7000 },
    { id: 3,  nombre: "Empanada de Carne", precio: 1000 },
    { id: 4,  nombre: "Helado", precio: 1000 }
];


const contenedor = document.getElementById('contenedor');
const btnPizza = document.getElementById('btn-pizza');
const btnMilanesa = document.getElementById('btn-milanesa');
const btnHamburguesa = document.getElementById('btn-hamburguesa');
const btnEmpanadas = document.getElementById('btn-empanadas');
const btnHelado = document.getElementById('btn-helado');
const precioTotal = document.getElementById('precioTotal');

let total = 0;

btnPizza.addEventListener('click', () => {
    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Se agregó correctamente tu compra .El valor es de $10.000. Desea seguir comprando? "
    });
    menu.forEach(item => {
        if(item.id===0){
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td class"nombreProducto">${item.nombre}</td>
        <td class"valorProducto">${item.precio}</td>
        <td class"borrarProducto"><button class="borrar">borrar</button></td>
        `;
        contenedor.appendChild(tr)
        total += item.precio;
        precioTotal.textContent = `Total: $${total}`;
        const btnBorrar = tr.querySelector('.borrar');
            btnBorrar.addEventListener('click', () => {
                Swal.fire({
                    icon: "error",
                    title: "Eliminaste tu pedido",
                    text: "Eliminaste tu compra (PIZZA)."
                });
                tr.remove();
                total -= item.precio;
                precioTotal.textContent = `Total: $${total}`;
            });
        }
    })
    
});


btnMilanesa.addEventListener('click', () => {
    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Se agregó correctamente tu compra .El valor es de $5.000. Desea seguir comprando? "
    });
    menu.forEach(item => {
        if(item.id===1){
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td class"nombreProducto">${item.nombre}</td>
        <td class"valorProducto">${item.precio}</td>
        <td class"borrarProducto"><button class="borrar">borrar</button></td>
        `;
        contenedor.appendChild(tr)
        total += item.precio;
        precioTotal.textContent = `Total: $${total}`;
        const btnBorrar = tr.querySelector('.borrar');
            btnBorrar.addEventListener('click', () => {
                Swal.fire({
                    icon: "error",
                    title: "Eliminaste tu pedido",
                    text: "Eliminaste tu compra (MILANESA)."
                });
                tr.remove();
                total -= item.precio;
                precioTotal.textContent = `Total: $${total}`;
            });
        }
    })
    
});



btnHamburguesa.addEventListener('click', () => {
    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Se agregó correctamente tu compra .El valor es de $7.000. Desea seguir comprando? "
    });
    menu.forEach(item => {
        if(item.id===2){
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td class"nombreProducto">${item.nombre}</td>
        <td class"valorProducto">${item.precio}</td>
        <td class"borrarProducto"><button class="borrar">borrar</button></td>
        `;
        contenedor.appendChild(tr)
        total += item.precio;
        precioTotal.textContent = `Total: $${total}`;
        const btnBorrar = tr.querySelector('.borrar');
            btnBorrar.addEventListener('click', () => {
                Swal.fire({
                    icon: "error",
                    title: "Eliminaste tu pedido",
                    text: "Eliminaste tu compra (HAMBURGUESA)."
                });
                tr.remove();
                total -= item.precio;
                precioTotal.textContent = `Total: $${total}`;
            });
        }
    })
    
});


btnEmpanadas.addEventListener('click', () => {
    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Se agregó correctamente tu compra .El valor es de $1.000. Desea seguir comprando? "
    });
    menu.forEach(item => {
        if(item.id===3){
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td class"nombreProducto">${item.nombre}</td>
        <td class"valorProducto">${item.precio}</td>
        <td class"borrarProducto"><button class="borrar">borrar</button></td>
        `;
        contenedor.appendChild(tr)
        total += item.precio;
        precioTotal.textContent = `Total: $${total}`;
        const btnBorrar = tr.querySelector('.borrar');
            btnBorrar.addEventListener('click', () => {
                Swal.fire({
                    icon: "error",
                    title: "Eliminaste tu pedido",
                    text: "Eliminaste tu compra (EMPANADA)."
                });
                tr.remove();
                total -= item.precio;
                precioTotal.textContent = `Total: $${total}`;
            });
        }
    })
    
});


btnHelado.addEventListener('click', () => {
    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Se agregó correctamente tu compra .El valor es de $1.000. Desea seguir comprando? "
    });
    menu.forEach(item => {
        if(item.id===4){
        const tr = document.createElement("tr")
        tr.innerHTML = `
        <td class"nombreProducto">${item.nombre}</td>
        <td class"valorProducto">${item.precio}</td>
        <td class"borrarProducto"><button class="borrar">borrar</button></td>
        `;
        contenedor.appendChild(tr)
        total += item.precio;
        precioTotal.textContent = `Total: $${total}`;
        const btnBorrar = tr.querySelector('.borrar');
            btnBorrar.addEventListener('click', () => {
                Swal.fire({
                    icon: "error",
                    title: "Eliminaste tu pedido",
                    text: "Eliminaste tu compra (HELADO)."
                });
                tr.remove();
                total -= item.precio;
                precioTotal.textContent = `Total: $${total}`;
            });
        }
    })
    
});




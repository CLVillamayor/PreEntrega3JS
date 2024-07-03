
//ENTREGA 3
let contador = 0;
let precioPizza=10000;
let precioEmpanada=1000;
let precioHamburguesa=7000;
let precioHelado=1000;


let precioTotal =0;

//PIZZA

btn1A.addEventListener("click", () => {
    Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Se agregó correctamente tu compra .El valor es de $10.000. Desea seguir comprando? "
    });

    contador=contador + precioPizza;
    console.log("Se agregó correctamente tu compra, el valor es de $10.000. Total a pagar es de: $ " + contador);
});

btn1B.addEventListener("click", () => {
    Swal.fire({
    icon: "error",
    title: "Eliminaste tu pedido",
    text: "Eliminaste tu compra (PIZZA)."
    });
    contador=contador - precioPizza;
    console.log("Eliminaste tu compra (PIZZA). Total a pagar es de: $ " + contador);
});

//EMPANADAS

btn2A.addEventListener("click", () => {
    Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Se agregó correctamente tu compra al carrito.El valor es de $1.000. Desea seguir comprando? "
    });

    contador=contador + precioEmpanada;
    console.log("Se agregó correctamente tu compra, el valor es de $1.000. Total a pagar es de: $ " + contador);
});

btn2B.addEventListener("click", () => {
    Swal.fire({
    icon: "error",
    title: "Eliminaste tu pedido",
    text: "Eliminaste tu compra (EMPANADA/S)."
    });

    contador=contador - precioEmpanada;
    console.log("Eliminaste tu compra (EMPANADA/S).Total a pagar: $ " + contador);
});

//HAMBURGUESAS

btn3A.addEventListener("click", () => {
    Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Se agregó correctamente tu compra al carrito.El valor es de $7.000. Desea seguir comprando? "
    });

    contador=contador + precioHamburguesa;
    console.log("Se agregó correctamente tu compra, el valor es de $7.000. Total a pagar es de: $ " + contador);
});

btn3B.addEventListener("click", () => {
    Swal.fire({
    icon: "error",
    title: "Eliminaste tu pedido",
    text: "Eliminaste tu compra (HAMBURGUESA)."
    });

    contador=contador - precioHamburguesa;
    console.log("Eliminaste tu compra (HAMBURGUESA).Total a pagar: $ " + contador);
});


//CONO DE HELADO

btn4A.addEventListener("click", () => {
    Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "Se agregó correctamente tu compra al carrito.El valor es de $1.000. Desea seguir comprando? "
    });

    contador=contador + precioHelado;
    console.log("Se agregó correctamente tu compra, el valor es de $1.000. Total a pagar es de: $ " + contador);
});

btn4B.addEventListener("click", () => {
    Swal.fire({
    icon: "error",
    title: "Eliminaste tu pedido",
    text: "Eliminaste tu compra (CONO DE HELADO)."
    });

    contador=contador - precioHelado;
    console.log("Eliminaste tu compra (CONO DE HELADO). Total a pagar: $ " + contador);
});




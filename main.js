//////Inicializacion de las variables a utilizar Contenido Entrega 2
//let nombreUsuario = '';
//let producto = '0';
//let deseaSeguirComprando = false;
//let cantidadMenu = '0';
//let cantidadPostre = '0';
//let precioTotalMenSelec = '0';
//let precioTotalPostreSelec = '0';
//let menuSeleccionado = '0';
//let precioTotalMen = '0';
//let postreSelecionado = '0';
//let precioTotalPostre = '0';

//////Array de menu 
//const menu = [
//{ id: 0,  nombre: "Pizza", precio: 10000 },
//{ id: 1,  nombre: "Milanesa", precio: 5000 },
//{ id: 2,  nombre: "Hamburguesa", precio: 7000 },
//{ id: 3,  nombre: "Empanada de Carne", precio: 1000 }

//];


////Array de Postres
//const postre = [
//{ id: 0,  nombre: "Chocolate", precio: 1000 },
//{ id: 1,  nombre: "Vainilla", precio: 1000 },
//{ id: 2,  nombre: "Dulce de Leche", precio: 1000 },
//{ id: 3,  nombre: "Frutilla", precio: 1000 }
    
//];




////Ejecución del programa

//nombreUsuario = prompt('Para una atencion personalizada, por favor ingrese su nombre');

//do{
    //producto = prompt('Hola '  +   nombreUsuario,'qué deseas compar? A, :MENU, B, :POSTRE CONO DE HELADO');
    //switch(producto){
        //case'A':
        //alert ("Por favor toca OK para ver nuestra lista de productos " ) 
        //alert (JSON.stringify(menu));
        //const index = prompt('Ingresa el índice de la comida que deseas visualizar (0, 1 , 2 o 3 ):');
        //const menuSelecionado = menu[parseInt(index)];

        //if (menuSelecionado) {
        //alert("El menu seleccionado es")
        //alert (JSON.stringify(menuSelecionado));
        //} else {
        //alert('Índice inválido. Por favor, ingresa un índice válido (0, 1 , 2 o 3).');
        //}

        //cantidadMenu = parseInt(prompt('Ingrese la cantidad de menues a comprar'));
        //let precioTotalMen = 0;
        //menu.forEach(menu => {
         //precioTotalMenSelec = menuSelecionado.precio * cantidadMenu;
        //});

        //alert("El precio total de comprar " + cantidadMenu +" comida/s es" + " $ " + precioTotalMenSelec );
        //break;

        //case'B':
        
        //alert ("Por favor toca OK para ver nuestra lista de productos " ) 
        //alert (JSON.stringify(postre));
        //const indexP = prompt('Ingresa el índice del sabor que deseas visualizar (0, 1 , 2 o 3 ):');
        //const postreSelecionado = postre[parseInt(indexP)];

        //if (postreSelecionado) {
            //alert("El sabor de cono de helado seleccionado es")
            //alert (JSON.stringify(postreSelecionado));
            //} else {
            //alert('Índice inválido. Por favor, ingresa un índice válido (0, 1 , 2 o 3).');
            //}
        //cantidadPostre = parseInt(prompt('Ingrese la cantidad de conos de helado a comprar'));

        //let precioTotalPostre = 0;
        //postre.forEach(postre => {
        //precioTotalPostreSelec = postreSelecionado.precio * cantidadPostre;
        //});
        //alert("El precio total de comprar " + cantidadPostre +" cono/s de helado es" + " $ " + precioTotalPostreSelec );

        //break;
   // }

    //CantidadTotaldeProductos = cantidadMenu + cantidadPostre ;
    //precioTotal = precioTotalMenSelec + precioTotalPostreSelec ;

    //deseaSeguirComprando = confirm('Desea seguir comprando?');

    //if //(cantidadPostre==0){
        //CantidadTotaldeProductos= cantidadMenu
        //precioTotal= precioTotalMenSelec
    //}
   // if (cantidadMenu==0){
        //CantidadTotaldeProductos= cantidadPostre
        //precioTotal= precioTotalPostreSelec
    //}

    

//}//while(deseaSeguirComprando)
    //alert(nombreUsuario + ' tu compra ha sido exitosa, has comprado ' + CantidadTotaldeProductos + ' productos y el total a pagar es : $' + precioTotal);



//////////////////////////////////////////////////


//ENTEGA 3
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




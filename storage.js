//////Array de menu 
const menuD = [
{ id: 0,  nombre: "Pizza", precio: 10000 },
{ id: 1,  nombre: "Milanesa", precio: 5000 },
{ id: 2,  nombre: "Hamburguesa", precio: 7000 },
{ id: 3,  nombre: "Empanada de Carne", precio: 1000 }

];
console.log("ESTE ES NUESTRO STOCK DE MENÚ Y POSTRE DISPONIBLE")
const getMenu= (dataMenuD) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(dataMenuD);
        },3000);
    });
};
getMenu(menuD)

.then((dataMenuD)=> console.log(dataMenuD))
.catch((error)=>console.error(error))
.finally(()=>console.log ("Fin del listado de menú disponible!"))


////Array de Postres
const postre = [
{ id: 0,  nombre: "Chocolate", precio: 1000 },
{ id: 1,  nombre: "Vainilla", precio: 1000 },
{ id: 2,  nombre: "Dulce de Leche", precio: 1000 },
{ id: 3,  nombre: "Frutilla", precio: 1000 }
    
];


const getPostre= (dataPostre) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve(dataPostre);
        },3000);
    
    });
    
};
getMenu(postre)

.then((dataPostre)=> console.log(dataPostre))
.catch((error)=>console.error(error))
.finally(()=>console.log ("Fin del listado de postres disponibles!"))
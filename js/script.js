// Funciones

// function bienvenida() {
//     alert("Bienvenido");
// respuestaUser = prompt("Desea ingresar a nuestra tienda online? SI/NO");

// while(true){
//     if (respuestaUser == "SI") {
//         alert("Bienvenido a la tienda!!");
//         break    
//     }else if (respuestaUser =="NO") {
//         alert("Esperamos volver a verte");
//         break
//     }else{
//         alert("Respuesta incorrecta");
//         respuestaUser = prompt("Desea ingresar a nuestra tienda online? SI/NO");
//     }
// }

}
//Objetos
//Generador de productos
function Productos(nombre,marca,tipo,peso,precio){
    this.nombre = nombre;
    this.marca = marca;
    this.tipo = tipo;
    this.peso = peso;
    this.precio = precio;
}
let leche = new Productos("Leche","Serenisima","Lacteo","1 litro", "50");
let cafe = new Productos("Cafe","Nescafe","Almacen","500gr","100");
let galleta = new Productos("Galleta","Cachafaz","Almacen","100gr","100");
let agua = new Productos("Agua","Villavicencio","Bebidas","750ml","60");

//Carrito de compras
function carritoDeCompras(){
    this.productos = [] ;
    this.cantidad = 0;
    this.total = 0;

    this.agregarAlCarrito = function (nuevoProducto){
        this.productos.push(nuevoProducto);
        this.cantidad += 1;
        console.log(`Se agrego un nuevo producto al carrito "${nuevoProducto.nombre}"`);
        console.log(`Total de elementos en el carrito ${this.cantidad} productos`);
    }

    this.eliminarArticuloDelCarrito = function(articuloAEliminar){
        var posicionDelArticulo = 0;
        for (var articuloIterador = 0; articuloIterador < this.productos.length; articuloIterador++) {
            if (this.productos[articuloIterador] == articuloAEliminar) {
                posicionDelArticulo = articuloIterador;  
            }   
        }    
            this.productos.splice(posicionDelArticulo);
            this.cantidad -= 1;
            console.log(`Se elimino del carrito "${articuloAEliminar.nombre}"`);
            console.log(`Total de elementos en el carrito ${this.cantidad}`);
            
        }
    this.limpiarCarrito = function(){
        this.productos = [];
        this.cantidad = 0;
        console.log("Se ha limpiado el carrito");
        console.log(`Total de elementos en el carrito ${this.cantidad}`)
        }    
}

//Programa principal

var carrito = new carritoDeCompras();
carrito.agregarAlCarrito(agua);
carrito.agregarAlCarrito(galleta);
carrito.eliminarArticuloDelCarrito(agua);
carrito.agregarAlCarrito(cafe);
carrito.limpiarCarrito();
console.log(carrito);
bienvenida()

    

let ecommerce = [
    {nombre: "Samsung TV", precio: 6000, articulos: 10},
    {nombre: "DELL notebook", precio: 4000, articulos: 30},
    {nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    {nombre: "Monitor Philips", precio: 12000, articulos: 20},
    {nombre: "Teclado logitech", precio: 3000, articulos: 5}
];

function totalArticulos(productos) {

    let resultados = [];
    
    productos.forEach(producto => {
		
        let valorTotal = producto.precio * producto.articulos;
        
        let nuevoProducto = {
            [producto.nombre]: valorTotal
        };
        
        resultados.push(nuevoProducto);
    });
    
    return resultados;
}

let resultado = totalArticulos(ecommerce);

console.log(resultado);

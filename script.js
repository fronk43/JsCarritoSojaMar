let total = 0
do {
    let producto = prompt("Ingrese el Combo que desea agregar:");
    let cantidad = prompt("Ingrese la cantidad de unidades:");

    let subtotal = agregarCarrito(producto, cantidad);
    total = total + subtotal;


}
while (confirm("Desea agregar otro producto al carrito?"));
console.log("El total de su compra es: " + total + " pesos.");

function agregarCarrito(prod, cant) {
    let resultado = 0;
    let precio = 0;
    let texto = "";

    switch (prod.toUpperCase().replace(" ", "")) {
        case "COMBO1": precio = 1500; break;
        case "COMBO2": precio = 1300; break;
        case "COMBO3": precio = 2500; break;
        case "COMBO4": precio = 2000; break;
        default: precio = 0;
    }
    resultado = precio * cant;
    if (resultado > 0) {
        console.log(" producto: " + prod.toUpperCase().replace(" ", "") + " precio: " + precio + " cantidad: " + cant + " =" + resultado + " pesos");

        if (cant >= 10) {
            let descuento = resultado * 0.25;
            resultado = resultado - descuento;
            console.log(" descuento por cantidad: 25% - subtotal: " + resultado + " pesos");
        }
        else
            if (cant >= 5) {
                let descuento = resultado * 0.15;
                resultado = resultado - descuento;
                console.log(" descuento por cantidad: 15% - subtotal: " + resultado + " pesos");

            }
            else
                if (cant >= 3) {

                    let descuento = resultado * 0.1;
                    resultado = resultado - descuento;
                    console.log(" descuento por cantidad: 10% - subtotal: " + resultado + " pesos");
                }
    }
    return resultado;



}
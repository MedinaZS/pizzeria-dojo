//Crea una función llamada pizzaOven que devuelva un objeto JavaScript (Pizza)

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {

    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    }

    return pizza;
}

// Crea una pizza con: "estilo Chicago", "tradicional", ["mozzarella"] y ["pepperoni", "salchicha"]
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

//Crea una pizza con: "lanzada a mano" , "marinara" , ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

//Crear 2 pizzas a eleccion
var pizza3 = pizzaOven("borde relleno", "barbacoa", ["cheddar", "catupiry"], ["pancetas", "aceitunas", "salchicha", "cebollas"]);
console.log(pizza3);

var pizza4 = pizzaOven("integral", "tradicional", ["mozzarella", "queso azul"], ["aceitunas", "choclo", "locotes"]);
console.log(pizza4);
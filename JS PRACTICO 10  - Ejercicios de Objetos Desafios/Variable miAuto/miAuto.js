let miAuto = {};

miAuto.marca = "Toyota";

miAuto.año = 2022;

miAuto.nuevo = true;

let propertyKey = "modelo";

miAuto[propertyKey] = "Corolla";

let anotherPropertyKey = "precio";

miAuto[anotherPropertyKey] = 25000;

let nextProperty = "color";

miAuto[nextProperty] = "azul";

for (let key in miAuto) {
  console.log(`Propiedad: ${key}, Valor: ${miAuto[key]}`);
}

/*
1)¿Qué devuelve miAuto[propertyKey]?
2)¿Qué devuelve miAuto["modelo"]?
3)¿Qué devuelve miAuto[nextProperty] ?
4)¿Qué devuelve miAuto["color"]?

1) miAuto[propertyKey] devuelve "Corolla" (el valor de la propiedad “modelo”).
2) miAuto["modelo"] también devuelve "Corolla".
3) miAuto[nextProperty] devuelve "azul" (el valor de la propiedad “color”).
4) miAuto["color"] también devuelve "azul".

*/
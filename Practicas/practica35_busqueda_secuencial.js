//BUSQUEDA SECUENCIAL
function secuencialSearch(array, elemento) {
    //iteramos el arreglo
    for (var el in array) {
        //comparamos cada elemento del arreglo con el elemento a buscar
        if (array[el] == elemento) {
            console.log("elemento encontrado en el indice ", el)
            break;
        }
    }
}


var array=[20,30,23,44,34,33,12,56,45]

busqueda(array,44)
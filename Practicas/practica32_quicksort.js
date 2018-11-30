console.time('loop');
function quicksort(array) {
    //se declaran 3 arreglos
    var menor = []
    var mayor = []
    var igual = []
    //mientras que el arreglo sea mayor que uno
    if (array.length > 1) {
        //escogemos el primer valor como pivote
        var pivote = array[0]
        for (var x of array) {
            //en base al pivote vamos separando los valores
            if (x < pivote)
                menor.push(x)
            if (x > pivote)
                mayor.push(x)
            if (x == pivote)
                igual.push(x)
        }
        //retornamos recursivamente la concatenacion de los 3 valores
        return quicksort(menor).concat(igual).concat(quicksort(mayor))
    } else {
        //regresamos el valor del arreglo
        return array
    }
}

var array=[3,6,23,56,34,21,65];
console.log(array)
console.log(quicksort(array))
console.timeEnd('loop');
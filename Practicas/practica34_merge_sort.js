
console.time('loop');

function mergeSort(array) {
    //si la longitud es 1 regresa el arreglo
    if (array.length == 1)
        return array
    //sacamos la mitad del arreglo
    var medio = Math.round(array.length / 2)
    //lo separamos en 2 arreglos izq y der
    var izquierda = array.slice(0, medio)
    var derecha = array.slice(medio)

    //retornamos la funcion mergesor2 donde llamamos recursivamente hasta que la longitud del arreglo sea 1
    return mergeSort2(mergeSort(izquierda), mergeSort(derecha))

}

function mergeSort2(izq, der) {
    //se declaran las variables y el arreglo del resultado
    var resultado = [];
    i = 0;
    j = 0;
    //mientras que i sea menor que el arreglo izquierdo y j sea menor que la longitud del arreglo derecho
    //se va ir anadiendo al arreglo resultado
    while (i < izq.length && j < der.length) {
        //si el elemento izq es menor que el derecho
        if (izq[i] < der[j]) {
            resultado.push(izq[i])//se agrega al resultado el elemento izquierdo y aumenta el valor de i
            i++
        } else {
            resultado.push(der[j])//en caso contrario se agrega el valor derecho y aumenta el valor de j
            j++
        }
    }
    //una vez que termina el ciclo juntamos los arreglos resultantes en uno solo
    return resultado.concat(izq.slice(i)).concat(der.slice(j))
}
var array=[10,34,23,67,45,87,45,77]
console.log("arreglo",array)
console.log(mergeSort(array))

console.timeEnd('loop');

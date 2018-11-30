console.time('loop');
function burbuja(array) {

    for (var i = 1; i < array.length; i++) {

        for (var j = 0; j < (array.length - i); j++) {
        	//SI EL ARREGLO EN LA ACTUAL POSICION ES MAYOR QUE EL SIGUIENTE 
            if (array[j] > array[j + 1]) {
                k = array[j + 1];//SE GUARDA TEMPORALMENTE EN K EL VALOR DE LA SIGUIENTE POSICION
                array[j + 1] = array[j];//SE EL SIGUIENTE VALOR CON EL VALOR ACTUAL
                array[j] = k;//EL VALOR DE LA ACTUAL POSICION SE CAMBIA POR EL TEMPORAL
            }
        }
    }
    return array;
}

var array=[3,6,23,56,34,21,65]
console.log("arreglo",array)
console.log("arreglo ordenado",burbuja(array));
console.timeEnd('loop');


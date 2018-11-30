
function shellSort(arr) {
    //declaramos el incremento como la mitad de la longitud del arreglo
    var increment = arr.length / 2;
    //mientras que el incremento sea mayor que 0 se recorrera el arreglo 
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];//almacenamos temporalmente el valor en la posicion i
            
            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        //recalculamos el valor del incremento
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}
var arreglo=[6,8,35,90,38,23,45,23,453,43]

console.log(shellSort(arreglo))





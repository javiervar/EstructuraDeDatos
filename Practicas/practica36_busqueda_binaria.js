function binarySearch (arr, value) {
  // declaramos las variables iniciales
  let start = 0
  let stop = arr.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the arr does not have a single item
  //Mientras el valor del medio no sea el valor que buscamos  y start sea menor que stop
  while (arr[middle] !== value && start < stop) {
    //si el valor a buscar es menor al valor de en medio
    if (value < arr[middle]) {
      stop = middle - 1//el valor de stop cambia por el valor de en middle -1
    } else {
      start = middle + 1 //el valor de estart cambia por el valor de middle +1
    }

    // se re calcula el valor de middle en cada iteracion
    middle = Math.floor((start + stop) / 2)
  }

  // Si el valor que buscamos esta en el indice middle se devuelve el indice y en caso de no se encontrado se devuelve -1
  return (arr[middle] !== value) ? -1 : middle
}


const arreglo = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(arreglo, 99))
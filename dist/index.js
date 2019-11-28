"use strict";
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* function chunkArray(array: Array<number>, size: number): Array<number> {
    let result: Array<number> = []
    for (let value of array){
        let lastArray = result[result.length -1 ]
        
        console.log(result)
        console.log(lastArray);
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else{
            lastArray.push(value)
        }
    }
    return result
} */
/* function chunkArray(array: Array<number>, size: number): Array<number> {
    let result: Array<number> = []
    let arrayCopy: Array<number> = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}
*/
function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        console.log(i);
        let chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
/* chunkArray(myArray, 5) */
console.log(chunkArray(myArray, 5));

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let countArr = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1

    while (found === false && start <= end) {
        countArr += 1
        middle = Math.floor((start + end) / 2)
        // console.log(middle)
        if (array[middle] === item) {
            found = true
            position = middle
            return position
        }
        if (item < array[middle]) {
            end = middle - 1
            //end=7
        } else {
            start = middle + 1
            //start 4
            //start 6
            //start 7
        }
    }
    return position
}

// console.log('BINARY', binarySearch(arr, 7))
// console.log(countArr)
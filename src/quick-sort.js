const arrQuickSort = [
    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
    -1, -5, 23, 6, 2, 35, 6, 3, 32, 9, 4, 2, 1, 2, 9, 6,
    4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
    -1, -5, 23
]
let countQuickSort = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }

    let centerIndex = Math.floor(array.length / 2)
    let centerElem = array[centerIndex]
    let lessNumberArr = []
    let bigNumberArr = []

    for (let i = 0; i < array.length; i++) {
        countQuickSort +=1
        if (i === centerIndex) {
            continue
        }
        if (array[i] < centerElem) {
            lessNumberArr.push(array[i])
        } else {
            bigNumberArr.push(array[i])
        }
    }

    return [...quickSort(lessNumberArr), centerElem, ...quickSort(bigNumberArr)]
}

// console.log(quickSort(arrQuickSort))
// console.log(countQuickSort)
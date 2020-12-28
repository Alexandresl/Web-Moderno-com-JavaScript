function multiplyAll(array, number) {
    for (let i in array) {
        array[i] = array[i] * number;
    }
    console.log(array);
}

function multiplyMajor5(array, number) {
    for (let i in array) {
        if (array[i] > 5) {
            array[i] = array[i] * number;
        }
    }
    console.log(array);
}

multiplyAll([1, 3, 5, 7, 9], 3);
multiplyMajor5([1, 3, 5, 7, 9], 3);
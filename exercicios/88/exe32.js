function calculaMediaArray(array) {
    let media = 0;
    for (let i in array) {
        media += array[i];
    }
    media /= array.length;
    console.log(`A média é ${media}`);
}

calculaMediaArray([1, 3, 5, 7, 9, 11]);
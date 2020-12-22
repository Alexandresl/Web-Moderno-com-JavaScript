function div3 (num) {
    if (num % 3 != 0) {
        return false;
    }
    return true;
}

console.log(div3(3));
console.log(div3(4));
console.log(div3(12));
console.log(div3(20));
function calculaBhaskara(ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c;
    if (delta >= 0) {
        const res = [];
        v1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
        res.push(v1);
        v2 = (-bx - Math.sqrt(delta))/( 2 * ax2);
        res.push(v2);
        return res;
    } else {
        return "Delta é negativo";
    }
}

console.log(calculaBhaskara(1, 3, 2))
console.log(calculaBhaskara(3, 1, 2))

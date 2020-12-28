function pa(n, a1, r) {
    let pa = [];
    let somaPa = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 + r
        somaPa += a1;
        pa.push(a1);
    }
    console.log(`PA: ${pa}`);
    console.log(`Soma dos termos - PA: ${somaPa}`);
}

function pg(n, a1, r) {
    let pg = [];
    let somaPg = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 * r;
        somaPg += a1;
        pg.push(a1);
    }
    console.log(`PG: ${pg}`);
    console.log(`Soma dos termos - PG: ${somaPg}`);
}

pa(10, 1, 2);
pg(10, 1, 2);
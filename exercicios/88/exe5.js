function emReal (a) {
    console.log(`R$ ${a.toFixed(2).toString().replace('.', ',')}`);
}

emReal(0.30000000000000004);
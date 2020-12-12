function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // número randomico entre 40 e 50
console.log(rand({ min: 955 })); // número randomico entre 955 e 1000
console.log(rand({})); // número randomico entre 0 e 1000
const addZeroLeft = (num, len) => {

    let numberWithZeroes = String(num);
    let counter = numberWithZeroes.length;

    while (counter < len) {
        numberWithZeroes = '0' + numberWithZeroes;
        counter++;
    }
    
    return numberWithZeroes;
}

function Pessoa() {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(addZeroLeft(this.idade, 2));
    }, 1000);
}

new Pessoa;

function checarAnoBissexto(ano) {
    const divisivel4 = ano % 4 === 0;
    const naoDivisivel100 = ano % 100 !== 0;
    const divisivel400 = ano % 400 === 0;


    return (divisivel4 && naoDivisivel100) || divisivel400;
}

console.log(checarAnoBissexto(2020));
console.log(checarAnoBissexto(2100));
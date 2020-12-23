function calculaFatorial (num) {
    return num == 0 ? 1 : num * calculaFatorial(num - 1);
}

function fatorial (num) {
    if (num < 0) {
        console.log('O número deve ser maior que 0 (zero).');
    } else {
        console.log(`${num}! = ${calculaFatorial(num)}`);
    }
}

fatorial(-1); // O número deve ser maior que 0 (zero)
fatorial(0); // 0! = 1
fatorial(1); // 1! = 1
fatorial(2); // 2! = 2
fatorial(3); // 3! = 6
fatorial(4); // 4! = 24
fatorial(5); // 5! = 120
fatorial(6); // 6! = 720
fatorial(7); // 7! = 5040
fatorial(8); // 8! = 40320
fatorial(9); // 9! = 362880
fatorial(10); // 10! = 3628800
function teste1(num) {
    if (num > 7)
        console.log(num);
        console.log("Final");
}

teste1(6); // Final
teste1(8); // 8 Final

function teste2(num) {
    if (num > 7); { // Cuidado com o ponto e vírgula
        console.log(num);
    }
}

teste2(6); // 6
teste2(8); // 8
const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
funcs[2](); // Imprime 10
funcs[8](); // Imprime 10
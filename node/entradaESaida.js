const anonimo = process.argv.indexOf('-a') !== -1;
// console.log(anonimo);

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n');
    process.exit();
} else {
     process.stdout.write('Informe o seu nome: ')
     // on(data) -> Quando for digitado algo e presionado Enter
     process.stdin.on('data', data => {
         const nome = data.toString().replace('\n', '');
         process.stdout.write(`Fala ${nome}`);
         process.exit();
     });
}
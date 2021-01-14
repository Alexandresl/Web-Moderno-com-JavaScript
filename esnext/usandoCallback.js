const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        let resultado = '';
        res.on('data', dados => {
            resultado += dados;
        });
        res.on('end', () => {
            callback(JSON.parse(resultado));
        })
    })
}

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`));
            return console.log(nomes);
        })
    })
})

/**
 * Retorno
 * [
 *  'A: Kellia',   'A: Hi',     'A: Inge',
 *  'A: Myrle',    'A: Doreen', 'A: Pennie',
 *  'A: Faye',     'A: Leena',  'A: Taylor',
 *  'A: Juieta',   'B: Rossie', 'B: Mary',
 *  'B: Dionysus', 'B: Myca',   'B: Sharlene',
 *  'B: Meghan',   'B: Perice', 'B: Micheil',
 *  'B: Nat',      'B: Bone',   'C: Kellina',
 *  'C: Barrie',   'C: Darda',  'C: Rainer',
 *  'C: Joan',     'C: Kasper', 'C: Sammie',
 *  'C: Scott',    'C: Kiel',   'C: Dell'
 * ]
 */
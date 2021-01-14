const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
            res.on('data', dados => {
                resultado += dados;
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            })
        })
    });
}

// let nomes = [];
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`));
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`));
//             return console.log(nomes);
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message));


// para testar o reject
getTurma('D').catch(e => console.log(e.message));

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
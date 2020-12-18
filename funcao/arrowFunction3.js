let comparaComThis = function (str, param) {
    console.log(str, "== this:", this === param);
}

console.log('Teste com function tradicional');
comparaComThis("global", global);
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis("global", global);
comparaComThis("obj", obj);

let comparaComThisArrow = (str, param) => {
    console.log(str, "== this:", this == param);
}

console.log('\nTeste com Arrow function');
comparaComThisArrow("global", global);
/**
 * O this em uma função arrow irá no runtime
 * Node apontar para o arquivo, que podemos
 * acessar através do module.exports
 */
comparaComThisArrow('module.exports', module.exports);
/**
 * O bind não causa efeito algum em uma arrow function
 * assim o this permanecerá apontando para o objeto
 * definido de acordo com o contexto lexico.
 */
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow('obj', obj);
comparaComThisArrow('module.exports', module.exports);
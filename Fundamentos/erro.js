function tratarErroELancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    }  finally {
        console.log("Final");
    } 
}

const obj = { nome: "Roberta" };

imprimirNomeGritado(obj);
/**
 * Final
 * 
 * c:\Users\Alexandre\dev\Web-Moderno-com-JavaScript\Fundamentos\erro.js:2
 *  throw {
 *  ^
 * {
 *  nome: 'TypeError',
 *  msg: "Cannot read property 'toUpperCase' of undefined",
 *  date: 2020-12-13T16:53:07.021Z
 * }
 */
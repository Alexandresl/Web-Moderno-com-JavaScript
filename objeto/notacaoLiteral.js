const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c};
const obj2 = {a, b, c};
console.log(obj1, obj2); // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3); // { nota: 7.87 }

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4); // { nota: 7.87 }

const obj5 = {
    funcao1: function() {
        //...
    },
    //A partir do ES2015 (ES6):
    funcao2() {
        //...
    }
}

console.log(obj5); // { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
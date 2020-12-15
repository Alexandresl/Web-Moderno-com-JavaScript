const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums) {
    if (x == 5) {
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

/**
 * Saída com o break;
 * 
 * 0 = 1
 * 1 = 2
 * 2 = 3
 * 3 = 4
 * 4 = 5
 */

for (let y in nums){
    if (y == 5) {
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

/**
 * Retorno com o continue
 * 
 * 0 = 1 
 * 1 = 2 
 * 2 = 3 
 * 3 = 4 
 * 4 = 5 -> aqui ele pula o índice 5
 * 6 = 7 
 * 7 = 8 
 * 8 = 9 
 * 9 = 10
 */


 /**
  * Atribuindo um rótulo ao laço.
  * neste caso, o break interno irá afetar o laço
  * definido pelo rótulo "esterno:" e não ao laço
  * em for mais interno como seria o comportamento
  * padrão
  */

 externo: 
 for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo;
        }
        console.log(`Par: ${a} - ${b}`);
    }
 }

 /**
  * Saída do laço anterior
  * 
  * Par: 0 - 0
  * Par: 0 - 1
  * Par: 0 - 1
  * Par: 0 - 1
  * Par: 0 - 2
  * Par: 0 - 3
  * Par: 0 - 4
  * Par: 0 - 5
  * Par: 0 - 6
  * Par: 0 - 7
  * Par: 0 - 8
  * Par: 0 - 9
  * Par: 1 - 0
  * Par: 1 - 1
  * Par: 1 - 2
  * Par: 1 - 3
  * Par: 1 - 4
  * Par: 1 - 5
  * Par: 1 - 6
  * Par: 1 - 7
  * Par: 1 - 8
  * Par: 1 - 9
  * Par: 2 - 0
  * Par: 2 - 1
  * Par: 2 - 2
  */
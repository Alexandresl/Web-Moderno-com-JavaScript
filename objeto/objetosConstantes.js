const pessoa = {
    nome: 'João'
}
/**
 * Aqui a constante pessoa recebe um endereço de memória.
 * Atribuição por referência.
 */

 pessoa.nome = 'Pedro';
 pessoa.nome = 'Pedro Silva';
 console.log(pessoa);
 /**
  * Ao criar ou alterar um valor de atributo,
  * a constante pessoa permanece apontatndo para o
  * mesmo endereço de memória. Não gerando qualquer
  * tipo de erro na execução.
  * Se eu tentar atribuir um novo objeto para a constante.
  * Por exemplo:
  *   pessoa = { nome: 'Ana'};
  * aí sim teremos um erro. pois estaremos tentando atribuir
  * o endereço de memória de um outro objeto para esta constante
  */

  /**
   * Utilizando o método freeze() de Object, podemos "congelar"
   * o objeto pessoa. Assim além de não conseguirmos mais alterar
   * a referência para o objeto, não conseguimos mais alterar os
   * próprios dados do objeto.
   * A partir deste momento não conseguimos mais
   * alterar nenhum atributo do objeto. Embora se houver alguma
   * atribuição, este não gere erro, apenas não modifica o objeto.
   */
  Object.freeze(pessoa);
  pessoa.nome = 'Maria'; // Não gera erro, mas não altera o atributo.
  pessoa.endereco = 'Rua A'; // Não adiciona o atributo, mas também não gera erro.
  delete pessoa.nome; // Não gera erro, mas não excluí o atributo.
  console.log(pessoa);
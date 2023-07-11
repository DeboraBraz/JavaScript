//operador logico 'e' (&&)
//retorna true se os dois operando for true 

//situação: uma pessoa só pode ir para o mercado de trabalho se for mais que 18 anos e tiver carteira de trabalho 
let maiorDeIdade=true;
let possuiCarteiraDeTrabalho=true
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log('Pode Aplicar: ',podeAplicar);

// operador logico 'ou' (||) - quando pelo menos uma das funções é verdadeiro
let maiorDeIdade2=false;
let possuiCarteiraDeTrabalho2=true
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;

console.log(podeAplicar2);

//operador NOT (!) 
let candidatoRecusado = !podeAplicar;
console.log('Canditado Recusado',candidatoRecusado);
// tem um cliente maior que 100 pontos - premium, caso contrario vai ser comum

let pontos=100;
//abaixo - a expressão depois do '=' diz que o primeiro caso é verdadeiro e o segundo falso 
let tipo = pontos >100 ? 'premium' : 'comum';

console.log(tipo);
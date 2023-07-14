// cai muito em entrevista de emprego 

// valor divisivel por 3 -> fizz
// valor divisivel por 5 -> buzz
// valor divisivel por  3 e 5 -> fizzbuzz
// não divisivel por 3 ou 5 -> entrada
// não é um numero -> 'não é um numero'

const resultado = fizzbuzz(15);
console.log(resultado);

function fizzbuzz(entrada){
    if  (typeof entrada !== 'number')
        return 'não é um numero';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0) 
        return 'Fizz'
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;
    
}
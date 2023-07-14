// função que usa 2 numeros e retorna o maior entre eles

let valorMaior = max(5,9);
console.log(valorMaior);

//1ª forma de fazer:
function max(numero1, numero2){
    if (numero1 > numero2)
        return numero1;
    else return numero2;
}

//2ª forma de fazer 
function max(numero1, numero2){
    if (numero1 > numero2)
        return numero1;
        return numero2; // sem utilizar o 'else'
}

//3ª forma de fazer | (operador ternario)
function max(numero1, numero2){
    return numero1>numero2 ? numero1:numero2;
}

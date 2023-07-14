// For-In 
const pessoa = {
    nome: 'debora',
    idade: 30 
};
//key-value (chave e valor)
for (let chave in pessoa){
    console.log(chave, pessoa ['nome']);
}

const cores =['vermelho','azul','verde'];

for (let indice in cores) {
    console.log (indice, cores[indice])
}


// for-of
for(let cor of cores){
    console.log(cor);
}

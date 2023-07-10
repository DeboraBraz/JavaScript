// verbo + substantivo
let corSite = 'azul';
function resetaCor() {
    corSite = '';
};

console.log (corSite);
resetaCor();
console.log (corSite);

//utilizando parametros na função

let corSite1 = 'azull';
function resetaCor1(cor,tonalidade) {
    corSite1 = cor + tonalidade;
};

console.log (corSite1);
resetaCor1("verde","claro");
console.log (corSite1);
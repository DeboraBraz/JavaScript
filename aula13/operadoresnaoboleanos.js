// o que é Falsy: (undefined, null, 0, false, '', NaN - not a number)
// o que é truthy: (tudo que não estiver dentro das categoria do Falsy)

//Ex
let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
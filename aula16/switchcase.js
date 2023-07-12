
let permissao = 'comum'; // comum, gerente ou diretor 

switch (permissao){
    case 'comum' : 
    console.log ('usiario comum');
    break;

    case 'gerente' : 
    console.log ('usuario gerente');
    break;

    case 'diretor' : 
    console.log ('usiario diretor');
    break;

    default :
    console.log ('usuario não reconhecido')
}
// Uso de variáveis e estrutura condicional "if".
// Exemplo: Verificar condição de voto.


let idade = 15; // Variável para armazenar a idade

// Verificar se a idade é maior ou igual a 18.
if (idade >= 18) {
    console.log('Voto obrigatório.');
}
// Caso não tenha 18 ou mais, verificar se
// tem 16 anos ou mais.
else if (idade >= 16) {
    console.log('Voto opcional.');
}
// Se não tiver o mínimo de 16 anos,
// é menor e não pode votar.
else {
    console.log('Não pode votar.');
}

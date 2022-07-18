let nome = prompt("Qual é o seu nome?")
console.log('nome:', nome)

let sobrenome = prompt("Qual o seu sobre nome?")
console.log('Sobre nome:',sobrenome)

let idade = prompt("Qual é a sua idade?")
Number(idade)
console.log('idade:',idade)
console.table({

    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    
});
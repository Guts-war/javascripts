let idade = 17
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não é permitido para votar')
} else if (idade < 18 || idade > 70) {
    console.log('Voto Opcional')
} else {
    console.log('Voto obrigatório')
}
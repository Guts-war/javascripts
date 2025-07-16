var agr = new Date()
let dia5em = agr.getDay()
let diaMes = agr.getDate()
let mes = agr.getMonth()
let ano = agr.getFullYear()
let hora = agr.getHours()
let min = agr.getMinutes()
/*
    0 - Domigo
    1 - segunda
    2 - terça
    3 - quarta
    4 - quinta
    5 - sexta
    6 - sabado

*/
console.log(`${diaMes}/${mes}/${ano}`)

switch (dia5em) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
    default:
        console.log('[ERRO] Dia Inválido')
}

console.log(`${hora}:${min}`)
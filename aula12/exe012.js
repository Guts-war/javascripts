let agora = new Date()
let horas = agora.get()
console.log(`Agora são ${horas} horas.`)
if (horas >= 0 && horas < 6) {
    console.log('Já é madrugada, vai dormir!')
} else if (horas >= 6 && horas < 12) {
    console.log('Bom dia, é manhã')
} else if (horas >= 12 && horas <18) {
    console.log('Boa tarde')
} else if (horas >= 18 && horas < 24) {
    console.log('Boa noite')
} else {
    console.log('Hora inválida')
} 
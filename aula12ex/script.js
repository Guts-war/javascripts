function carregar() {
    let msg = document.getElementById('hmsg')
    let imagem = document.getElementById('img')
    let data = new Date()
    let horas = 2
    msg.innerHTML = `<h3 style="font-family: monospace; font: x-lagu;">${horas}</h3>`
    
    if (horas >= 0 && horas < 6) {
        imagem.src = 'img/noite.jpg'
        document.body.style.background = '#02041d'
    } else if (horas >= 6 && horas < 12) {
        imagem.src = 'img/manha.jpg'
        document.body.style.background = '#e9c389ff'
    } else if (horas >= 12 && horas <18) {
        imagem.src = 'img/tarde.jpg'
        document.body.style.backgroundColor = '#D18A04'
    } else if (horas >= 18 && horas < 24) {
        imagem.src = 'img/noite.jpg'
        document.body.style.backgroundColor = '#0a0c27ff'
    } else {
        msg.innerHTML = 
        '<p><strong>Relógio ta quebrado, um dia ele volta</strong></p>'
    } 
}    
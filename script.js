function carregar() {

    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem')
  
    //Código para calcular a imagem e fundo de tela
    let data = new Date();
    let hora = data.getHours();
  
    //Código para aparecer o horário ao vivo
    let horalocal = new Date().toLocaleTimeString('pt-br');
    msg.innerHTML = horalocal;
    document.body.style.background = "#0f0c29;"
  
    if (hora >= 0 && hora < 12) {
      //Bom dia
      img.src = 'https://relogio.razyigarashi.repl.co/manhã.jpg'
    }
  
    else if (hora >= 12 && hora < 18) {
      //Bom tarde
      img.src = 'https://relogio.razyigarashi.repl.co/tarde.jpg'
    }
  
    else {
      //Boa noite
      img.src = 'https://relogio.razyigarashi.repl.co/noite.jpg'
    }
}
  
setInterval(carregar, 1000);
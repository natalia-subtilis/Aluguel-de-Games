function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let nomeBotao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}`)) {
       
        imagem.classList.remove('dashboard__item__img--rented');
        nomeBotao.classList.remove('dashboard__item__button--return');
        nomeBotao.textContent = 'Alugar';
    }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        nomeBotao.textContent = 'Devolver';
        nomeBotao.classList.add('dashboard__item__button--return');
      
    }
}


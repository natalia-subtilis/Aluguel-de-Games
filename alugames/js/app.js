function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let nomeBotao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        nomeBotao.classList.remove('dashboard__item__button--return');
        nomeBotao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        nomeBotao.textContent = 'Devolver';
        nomeBotao.classList.add('dashboard__item__button--return');
      
    }
}


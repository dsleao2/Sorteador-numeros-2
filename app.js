function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
      }


    let sorteados = [];
    let numero;
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        //lopping dentro do for, para impedir que sejachamado numero aleatório repetido. 
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    //usado para informar no label quais numeros foram sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();

}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    //se tem na lista de classes do botão, o botão desabilitado, remover ele e adicionar o botão habilitado
    if (botao.classList.contains('container__botao-desabili0tado')) {
        botao.classList.remove('container__botao-desabili0tado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabili0tado');

    }
}

function reiniciar() {

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
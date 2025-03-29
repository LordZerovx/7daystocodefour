let tentativas = 0;
let numeroMaximo = 10;
let numeroMinimo = 1;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + numeroMinimo);
console.log(numeroSecreto);

function exibirTextNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextNaTela('h1', 'Obaa! Vamos jogar um jogo de adivinhação!');

function exibirParagrafo(id, textoDoParagrafo) {
    let paragrafo = document.getElementById(id);
    paragrafo.innerHTML = textoDoParagrafo;
}

exibirParagrafo('exibirnatela', `Escolha um número entre ${numeroMinimo} e ${numeroMaximo}`);


function verificarChute() {

    let chute = parseInt(document.getElementById('numero').value);

    if (tentativas >= 3) {
        exibirTextNaTela('h1', `Fim de jogo! O número secreto era ${numeroSecreto}.`);
        return;
    }

    if (chute == numeroSecreto) {
        exibirTextNaTela('h1', `Parabéns! Você acertou o número secreto com ${tentativas} tentativas!`);
    } else if (chute < numeroSecreto) {
        exibirParagrafo('dica', 'O número secreto é maior!');
    } else {
        exibirParagrafo('dica', 'O número secreto é menor!');
    }

    tentativas++;
    limparCampo();
}
   

function limparCampo() {
    chute = document.getElementById('numero');
    chute.value = '';
}



// alert('Obaa! Vamos jogar um jogo de adivinhação!');
// let chute = prompt(`Escolha um número entre ${numeroMinimo} e ${numeroMaximo}!`);
// let continuar = true;

// while (continuar) {
//     if (chute == numeroSecreto && tentativas == 0) {
//         alert('Uau! Você acertou de primeira! Parece até mágica');
//     } else if (chute < numeroSecreto) {
//         alert
//     }
// }


// if (chute == numeroSecreto && tentativas == 0) {
//     alert('Uau! Você acertou de primeira! Parece até mágica');
// } else if (chute == numeroSecreto && tentativas > 0) {
//     alert(`Você acertou o número secreto com ${tentativas} tentativas!`);
// } else if (chute == numeroSecreto && tentativas = 3)


//opannn kk olha eu aqui denovo kkk tô morto de sono kk mais quero fazer alguma coisa difente kk
//OK9kyJHdn0b-pKEiQHaCrpBtkMRv2_NmE6EOdX3eTSyeIUvpT0tWmFKA2fmIP0Yy-6yrQuqJiEHhmJJvmHSUdjbNW2IX4ba1J9fiMo0JSYLNldAMtTEjNMSnq_wKMFtt
//isso aqui é um texto criptografado kk só copiar e colocar num site chamado invertexto.com que tu vai saber que que tá escrito kk

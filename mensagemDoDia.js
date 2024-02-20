let dados = require('./dados');  //Consumindo(importando) a camada de dados

function retornaMensagemDoDia(dia) {  //*
    return dados.frases[dia - 1];
}

exports.retornaMensagemDoDia = retornaMensagemDoDia;

/* Função que recebe como parâmetro o dia do mês, consome o array e devolve a frase */

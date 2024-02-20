const express = require('express');
const app = express();

let data = new Date(); //*

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();  // *Obtém o dia atual
    let mensagemSelecionada = mensagemDoDia.retornaMensagemDoDia(dia);  //Executa a função que irá retornar a mensagem do dia

    res.json({mensagem : mensagemSelecionada});  //Devolve a resposta ao front-end com a mensagem do dia no formato json
});

app.listen(8080, () => {  //Configuração da porta que irá monitorar a aplicação
    console.log('Servidor iniciado em: ' + data);
})

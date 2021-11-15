function WiriteLnFile(arquivo, mensagem){
    fs = require('fs');
    
    try { //Checa se o documento existe
        if (fs.existsSync(arquivo)) {
            /*console.log('arquivo existe'); //Escreve na mesma Linha
            fs.appendFile(arquivo, 'Na Mesma Linha', function (err) {
                if (err) return console.log(err);
            });
            */
            fs.appendFile(arquivo, '\r\n' + mensagem, function (err) {
                if (err) return console.log(err);
            });
            console.log('escrito no arquivo')
        } else { // Cria o Documento
            console.log('arquivo não existe');
            fs.writeFile(arquivo, '', function (err) {
                if (err) return console.log(err);
            });
            console.log('Criado Arquivo');
            fs.appendFile(arquivo, mensagem, function (err) {
                if (err) return console.log(err);
            });
            console.log('escrito no arquivo')
        }
    } catch(err) {
        console.error(err)
    }
}


var caminho = 'C:/Projetos/batch/Arquivo.txt';
var texto = 'Alguma coisa';


WiriteLnFile(caminho, texto);

//Mostra o Hostname do equipamento
var os = require("os");
var hostname = os.hostname();
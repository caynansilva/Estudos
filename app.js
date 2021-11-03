const fileSystem = require('./js/FileManagement/FileManagement.js');

let arquivo = 'Teste.txt';
let caminho = 'C:/Projetos/batch/';
let mensagem = 'Hello World';

//Cria o Arquivo:
fileSystem.WiriteLnFile(caminho + arquivo, mensagem);

//Move o Arquivo;
fileSystem.moveFile(arquivo, caminho, 'C:/Projetos/')

//Copia o Arquivo
fileSystem.copyFile('C:/Projetos/Teste.txt', caminho);

//Deleta o Arquivo
setTimeout(function(){  //Espera 2 Segundos entre cada execução
    fileSystem.deleteFile('C:/Projetos/Teste.txt');
}, 2000);

setTimeout(function(){ //Espera 2 Segundos entre cada execução
    fileSystem.deleteFile('C:/Projetos/batch/Teste.txt');
}, 2000);

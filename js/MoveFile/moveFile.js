function MoveFile(arquivo, oldPath, newPath){
    var fs = require('fs')

    if (fs.existsSync(oldPath) && fs.existsSync(newPath) && fs.existsSync(oldPath + arquivo)) {

        fs.rename(oldPath + arquivo, newPath + arquivo, function (err) {
            if (err) throw err
            console.log('Arquivo Movido!');
        })
    } else {
        console.log('Caminho Ou Arquivo Não Existem');
    }
}

var arquivo = 'file.txt';
var oldPath = 'C:/Projetos/batch/';
var newPath = 'C:/Projetos/batch/move/';

MoveFile(arquivo, oldPath, newPath);
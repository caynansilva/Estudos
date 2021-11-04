/* 
-------------------------------------------------------------------------------
    Description: Copy files from a Folder to Another Path Location
    Author: Caynan Ramos Silva
    Inputs: ArquivoOrigem = 'C:/Path/Folder/move/file.txt';
            PastaDestino = 'C:/Path/Folder/move2/file.txt';
    Call Function:        
            copyFile(ArquivoOrigem, PastaDestino);
    Function Outputs: N/A
    Creation Date: 03/11/2021
    Version: 1.0.0 Beta
-------------------------------------------------------------------------------
*/
function copyFile(copySource, copyDestiny){
    const fs = require('fs')
    //Identifica o arquivo informado
    let FileSource = copySource.substr(copySource.lastIndexOf('/') + 1);
    //Se o arquivo for informado no caminho Destino Remove o Arquivo para não apresentar erro
    if(copyDestiny.substr(copyDestiny.lastIndexOf('/') + 1) == FileSource) {
      copyDestiny = copyDestiny.substr(0, copyDestiny.lastIndexOf('/') + 1);
    }
    //Checa se o Destino Possui '/' e se não tiver informa
    if (copyDestiny.substr(copyDestiny.length -1, 1) != '/') {
      copyDestiny += '/';
    }
    //Checa se o Caminho Origem e Destino São Válidos para a a Cópia
    if (fs.existsSync(copySource)) {
      if(fs.existsSync(copyDestiny)) {
        fs.copyFile(copySource, copyDestiny + FileSource , (err) => {
            if (err) throw err;
            //console.log('Arquivo copiado para o destino');
          });
      } else {
        console.log('Caminho ou Arquivo DESTINO não existem');
      }
    } else {
        console.log('Caminho ou Arquivo ORIGEM não existem');
    }
  }
/* 
-------------------------------------------------------------------------------
    Description: Remove a specific File from a folder
    Author: Caynan Ramos Silva
    Inputs: 
            ArquivoToDelete = 'C:/Path/Folder/file.txt';
    Call Function:
            DeleFile(ArquivoToDelete);
    Function Outputs: N/A
    Creation Date: 03/11/2021
    Version: 1.0.0 Beta
-------------------------------------------------------------------------------
*/
function deleteFile(FilePath){
    const fs = require('fs')
    //Identifica o arquivo informado
    let FileSource = FilePath.substr(FilePath.lastIndexOf('/') + 1);
    //Checa se o Arquivo Existe
      if(fs.existsSync(FilePath)) {
        setTimeout(function(){  //Espera 2 Segundos entre cada execução
            fs.unlinkSync(FilePath, (err) => {
                if (err) throw err;
                //console.log('Arquivo Deletado com sucesso!');
              });
        }, 2000);
      } else {
        console.log('Caminho ou Arquivo não existem');
      }
}
/* 
-------------------------------------------------------------------------------
    Description: Move Files Between Folders
    Author: Caynan Ramos Silva
    Inputs: 
            var arquivo = 'file.txt';
            var oldPath = 'C:/Folder/Path/';
            var newPath = 'C:/Folder/Path/move/';
    Call Function:
            MoveFile(arquivo, oldPath, newPath);
    Function Outputs: N/A
    Creation Date: 03/11/2021
    Version: 1.0.0 Beta
-------------------------------------------------------------------------------
*/
function moveFile(arquivo, oldPath, newPath){
    var fs = require('fs')
    if (fs.existsSync(oldPath) && fs.existsSync(newPath) && fs.existsSync(oldPath + arquivo)) {
        fs.rename(oldPath + arquivo, newPath + arquivo, function (err) {
            if (err) throw err
            //console.log('Arquivo Movido!');
        })
    } else {
        console.log('Caminho Ou Arquivo Não Existem');
    }
}
/* 


/* 
-------------------------------------------------------------------------------
    Description: Move Files Between Folders
    Author: Caynan Ramos Silva
    Inputs: 
            var arquivo = 'file.txt';
            var oldPath = 'C:/Folder/Path/';
            var newPath = 'C:/Folder/Path/move/';
    Call Function:
            MoveFile(arquivo, oldPath, newPath);
    Function Outputs: N/A
    Creation Date: 03/11/2021
    Version: 1.0.0 Beta
-------------------------------------------------------------------------------
*/
function renameFile(currentFileName, NewFileName){
    var fs = require('fs')
    if (fs.existsSync(currentFileName)) {
        fs.rename(currentFileName, NewFileName, function (err) {
            if (err) throw err
            //console.log('Arquivo Renomeado!');
        })
    } else {
        console.log('Caminho Ou Arquivo Não Existem');
    }
}
/* 
-------------------------------------------------------------------------------
    Title: Wirete Line in File
    Description: Create a File to Write Content on it or Wirite on next line of the file
    Author: Caynan Ramos Silva
    Inputs: 
            caminho = 'C:/Folder/Path/File.txt';
            texto = 'Hello World';
    Call Function:
            WiriteLnFile(caminho, texto);
    Function Outputs: N/A
    Creation Date: 03/11/2021
    Version: 1.0.0 Beta
-------------------------------------------------------------------------------
*/
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

module.exports = {WiriteLnFile, moveFile, copyFile, deleteFile, renameFile};
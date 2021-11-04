function DeleFile(FilePath){
    const fs = require('fs')
    //Identifica o arquivo informado
    let FileSource = FilePath.substr(FilePath.lastIndexOf('/') + 1);
    //Checa se o Arquivo Existe
      if(fs.existsSync(FilePath)) {
        fs.unlinkSync(FilePath, (err) => {
            if (err) throw err;
            console.log('Arquivo Deletado com sucesso!');
          });
      } else {
        console.log('Caminho ou Arquivo não existem');
      }
  }
  var ArquivoToDelete = 'C:/Projetos/batch/move/file.txt';
  DeleFile(ArquivoToDelete);
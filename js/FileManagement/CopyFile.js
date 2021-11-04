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
          console.log('Arquivo copiado para o destino');
        });
    } else {
      console.log('Caminho ou Arquivo DESTINO não existem');
    }
  } else {
      console.log('Caminho ou Arquivo ORIGEM não existem');
  }
}
var ArquivoOrigem = 'C:/Projetos/batch/move/file.txt';
var PastaDestino = 'C:/Projetos/batch/file.txt';
copyFile(ArquivoOrigem, PastaDestino);
var fs = require('fs')

var oldPath = 'C:/Projetos/batch/file.txt'
var newPath = 'C:/Projetos/batch/move/file.txt'

fs.rename(oldPath, newPath, function (err) {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})
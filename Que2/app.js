var fs = require('fs');

fs.readFile('inputFile.json', (err, data) =>{
var fileContent=JSON.parse(data);
fileContent.employee1.name='vara';
console.log(fileContent);
fs.writeFile('outputFile.json',JSON.stringify(fileContent),  (err) =>{
  if (err) throw err;
  else
  console.log("Write Successfully");

});
});

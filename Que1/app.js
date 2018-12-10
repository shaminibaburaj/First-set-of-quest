var fs = require('fs');
var xml2js=require('xml2js');
var js2xmlparser=require('js2xmlparser');
//Open a file on the server and return its content:
fs.readFile('inputFile.xml', (err, data) =>{
xml2js.parseString(data, function (err, result) {

  result.name='wipro LTD';

  var output = js2xmlparser.parse("name", result.name);
  console.log(output);
  fs.writeFile('outputFile.xml', output, (err) =>{
    if (err) throw err;
    else
      console.log("Write Successfully");
  });
});
});

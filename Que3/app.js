const https = require('https');
const fs=require('fs');
const xml2js=require('xml2js');

  var options= {
      host: "www.example.com",
      port: 443,
  };
  var req = https.request(options, (res) =>{
    res.setEncoding('utf8');
      res.on('data',(result)=> {
          console.log("data "+result);
      });
if(res.statusCode==200){
          console.log("Got response: " + res.statusCode);
      }
});
req.end();

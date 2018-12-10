const https = require('https');
const fs=require('fs');

var data = JSON.stringify({
title: 'foo-shams',
body: 'bar',
userId: 1
})

var options= {
host: "jsonplaceholder.typicode.com",
path:"/posts/",
method: "POST",
headers:
{
  "Content-type": "application/json; charset=UTF-8"
},body:data
};
// var data='"body": {"title" :"foo","body": "bar","userId": "1"}';
var req=https.request(options, (res)=>{

console.log(`statusCode: ${res.statusCode}`)
res.setEncoding('utf8');
res.on('data',(d)=> {
var result=JSON.parse(d);
console.log((result));
 if(res.statusCode===201){
    console.log("statusCode   "+res.statusCode);
    console.log(result.id);
  }
});
});
req.write(data);
console.log(data);
req.end();

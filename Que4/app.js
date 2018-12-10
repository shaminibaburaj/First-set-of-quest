const https = require('https');

var req=https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
  res.on('data', (d) => {
    var result=JSON.parse(d);
    console.log(JSON.stringify(result));
    if(res.statusCode==200)
    {
      console.log("statusCode   "+res.statusCode);
      console.log(result.id);
      console.log(result.userId);
    }
  });
});
req.end();

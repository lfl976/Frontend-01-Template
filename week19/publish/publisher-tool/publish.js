const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

let filename = './cat.jpg';

fs.stat(filename, (error, stat) => {
  console.log(stat.size)

  const options = {
    host: 'localhost',
    port: 8081,
    path: '/?filename=cat.jpg',
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': stat.size
    }
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });
  
  // Write data to request body
  
  let readStream = fs.createReadStream('./cat.jpg')
  readStream.pipe(req);
  readStream.on('end', () => {
    req.end();
  })
  // req.write(postData);
 // req.end();

})

const postData = querystring.stringify({
  'content': 'Hello World!'
});






const http = require("http");
const querystring = require("querystring");
const fs = require("fs");
var archiver = require("archiver");
const child_process = require("child_process");

let packname = "./package";

// fs.stat(filename, (error, stat) => {
// console.log(stat.size);

const options = {
  host: "localhost",
  port: 8081,
  path: "/?filename=" + "package.zip",
  method: "POST",
  headers: {
    "Content-Type": "application/octet-stream",
  },
};

var archive = archiver("zip", {
  zlib: { level: 9 }, // Sets the compression level.
});

archive.directory(packname, false);

archive.finalize();

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf8");
});

req.on("error", (e) => {
  console.error(`problem with request: ${e.message}`);
});

archive.pipe(req);

archive.on("end", () => {
  req.end();
  child_process.exec(
    "cmd /c start https://github.com/login/oauth/authorize?client_id=Iv1.241f2752b7610764&redirect_uri=http%3A%2F%2Flocalhost%3A8000&scope=read%3Auser&state=123abc"
  );
});

// Write data to request body

// let readStream = fs.createReadStream('./cat.jpg')
// readStream.pipe(req);
// readStream.on('end', () => {
//   req.end();
// })
// req.write(postData);
// req.end();

// })

const postData = querystring.stringify({
  content: "Hello World!",
});

const http = require("http");
const fs = require("fs");
const unzip = require("unzipper");
const https = require("https");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // debugger;
  if (req.url.match(/^\/auth/)) return auth(req, res);
  if (!req.url.match(/^\/?/)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("not found");
    return
  }
  // let matched = req.url.match(/filename=([^&]+)/);
  // let filename = (matched && matched[1]);
  // console.log(filename)
  // if(!filename)
  //   return;
  // let writeStream = fs.createWriteStream("../server/packages/package");

  
  const options = {
    hostname: "api.github.com",
    port: 443,
    path: `/user`,
    method: "GET",
    headers: {
      Authorization: "token " + req.headers.token,
      "User-Agent": 'lfl-publish-server',
    }
  };
  const req1 = https.request(options, (response) => {
    let body = '';
    response.on("data", (d) => {
      body  += d.toString()
    });
    response.on("end", () => {
      console.log(body)
      let user = JSON.parse(body)
      // 权限检查
      let writeStream = unzip.Extract({ path: "../server/public" });
      req.pipe(writeStream);
      req.on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("okay");
      });
        });
      });
  req1.on("error", (e) => {
    console.error(e);
  });
  req1.end();

  /**/
});

function auth(req, res) {
  let code = req.url.match(/code=([^&]+)/)[1];
  console.log(code);
  let state = "abc123";
  let client_secret = "e5c106f09d125f2a028a2a5e163afdaa8e559b17";
  let client_id = "Iv1.241f2752b7610764";
  let redirect_uri = encodeURIComponent("http://localhost:8081/auth");
  let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`;
  let url = `https://github.com/login/oauth/access_token?${params}`;

  const options = {
    hostname: "github.com",
    port: 443,
    path: `/login/oauth/access_token?${params}`,
    method: "POST",
  };

  const req1 = https.request(options, (response) => {
    // console.log("statusCode:", res.statusCode);
    // console.log("headers:", res.headers);

    response.on("data", (d) => {
      // process.stdout.write(d);
      let result = d.toString().match(/access_token=([^&]+)/);
      if(result) {
        let token = result[1];
        res.writeHead(200, {
          "access_token": token,
          "Content-Type": "text/html",
        });
        res.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
      } else {
        res.writeHead(200, {
          "Content-Type": "text/plain",
        });
        res.end("error");
      }
    });
  });

  req1.on("error", (e) => {
    console.error(e);
  });
  req1.end();

  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("okay");
}

server.listen(8081);

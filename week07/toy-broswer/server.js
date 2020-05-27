const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req res");
  console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Foo", "bar");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
`<html m=a>
<head>
    <style>
body div #myid {
    width: 100px;
    background-color: #fff;
}
body div img{
    width:30px;
    background-color: #ff5000;
}
    </style>
</head>
<body>
    <div>
        <img id="myid" />
        <img />
    </div>
</body>
</html>
`
  );
});

server.listen(8088);

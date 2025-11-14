// assignment6/server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

function serveStatic(res, filePath, contentType = "text/html", status = 200) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Server Error");
    }
    res.writeHead(status, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/home" : req.url;
  if (url === "/home") {
    serveStatic(res, path.join(__dirname, "public", "home.html"));
  } else if (url === "/about") {
    serveStatic(res, path.join(__dirname, "public", "about.html"));
  } else if (url === "/contact") {
    serveStatic(res, path.join(__dirname, "public", "contact.html"));
  } else {
    serveStatic(
      res,
      path.join(__dirname, "public", "404.html"),
      "text/html",
      404
    );
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

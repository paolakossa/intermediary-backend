import { createServer } from "node:http";
import { readFile } from "node:fs";

createServer((req, res) => {
  readFile("demo-readFile.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("Error reading file");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}).listen(8080);

import { createServer } from "node:http";
import { parse } from "node:url";
import { readFile } from "node:fs";

createServer((req, res) => {
  const url = parse(req.url, true);
  const filename = "." + url.pathname;
  readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}).listen(8080);

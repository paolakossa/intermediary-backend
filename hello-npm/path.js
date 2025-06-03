import { basename, dirname } from "node:path";

let nomeArquivo = basename("./teste.txt");
let filename = basename("./teste/something");

let dir = dirname("./teste/something");
let dir2 = dirname("./teste/something/file.txt");

console.log(nomeArquivo); // teste.txt
console.log(filename); // something
console.log(dir); // teste
console.log(dir2); // teste/something

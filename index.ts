import http from 'http';
import path from 'path'; 
import fs from 'fs';

const hostname = '127.0.0.1';
const  port:number = 3000;



console.log(__dirname);

const server:http.Server = http.createServer((req, res) => {
  
  res.setHeader('Content-Type', 'text/html');
  displayHome(res);
});

// its the same as addListen in to js
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function displayHome(res:http.ServerResponse){
  fs.readFile("./index.html",(err, data)=>{
    if(err){
      res.writeHead(404); 
      res.end("ERROR:404 - page not found!")
      console.log("Error");
    }
    res.writeHead(200);
    res.end(data);
    console.log(data);
  });
}
import http from 'http';
// Server creation
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==="/users"){
        res.writeHead(200,{'content-Type':'application/json'});
        res.end(JSON.stringify({name:"ChandR"}));
    }
    else{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end("Hello from backend");
}
});

// Server listening or starting
server.listen(7007,()=>{
    console.log("Server running at port ${7007}");
});

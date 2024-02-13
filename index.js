const http= require("http");
const fs= require("fs");
const url=require("url")

const myServer = http.createServer((req, res) =>{
    const log= `${Date.now()}: ${req.url}: New Req Recieved\n`
    if(req.url== "/favicon.ico") return res.end()
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("home page")
            break;
            case "/about":
            res.end("about page")
            break;
            default:
                res.end("page not found")
        }
    })
   
})
myServer.listen(8000,()=>console.log("Server Started"))
const http=require("http")
const webSocket=require("ws")
const server=http.createServer((req,res)=>{
    res.end("I am connected")
})
const wss=new webSocket.WebSocket({server})
server.listen(8000)

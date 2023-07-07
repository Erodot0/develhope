import { createServer } from "node:http"

const server = createServer((req, res) => {
    console.log("request received")

    res.statusCode = 200;  // status code that will show up
    res.setHeader("Content-Type" , "text/html") // the header of our request
    res.end("<html><body><h1>Hello world</h1></body></html>")
})

server.listen(3000, () => {
    console.log("server running at http://localhost:3000");
})
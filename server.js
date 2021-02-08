const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) =>{
    console.log(req.url)
    let body;
    // const body = req.url === '/styles.css' 
    // ? fs.readFileSync('./public/styles.css')
    // : fs.readFileSync('./public/index.html')
    if(req.url === '/styles.css') {
        body = fs.readFileSync('./public/styles.css')
    }
    else if(req.url === '/js_1.js') {
        body = fs.readFileSync('./public/js_1.js')
    }
    else {
        body = fs.readFileSync('./public/index.html')
    }
    
    res.end(body)
})
const port = process.env.PORT || 3000
server.listen(port)
console.log('server started')
const http = require('http');

const server = http.createServer()


server.on('request', (req, res) => {
    console.log("Request received, address: " + req.url);
    if(req.url == '/'){
        $msg = `this is index`;
    } else if (req.url == '/login') {
        $msg = `this is index`;
    } else {
        $msg = '404';
    }

    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //res.write("你好");
    res.write($msg);
    res.end();
})

server.listen(8080, function() {
    console.log(`Server is listening on 8080!`)
  })
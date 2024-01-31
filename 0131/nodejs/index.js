// const connect = require('./module.js');
// console.log(connect.a);

// const { a, b, c } = require('./module.js');
// console.log(a, b, c);

//http 모듈 가져옴
const http = require('http');
const fs = require('fs');
//서버 만들기
const server = http.createServer(function (req, res) {
    //res.writeHead(201);
    //res.write('<h1>Hello Nodejs</h1>');
    //res.end('<p>End</p>');

    //파일 전송 (try 안은 성공했을 때 코드, catch는 실패)
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

/*
server.on('request', function () {
    console.log('요청 이벤트');
});
server.on('connection', function () {
    console.log('접속 이벤트');
});
*/

//서버를 실행
server.listen(8000, function () {
    console.log('8080번 포트 실행');
});

const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//socket서버
const io = socketIo(server);

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

io.on('connection', (socket) => {
    console.log('조인 전', socket);
    socket.on('open_message', (arg, arg2, arg3, cb) => {
        console.log('arg', arg, arg2, arg3);
        cb(arg, arg2, arg3);
    });
    socket.on('form_message', (arg) => {
        console.log(arg);
        socket.emit('backend_message', arg);
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app); //http서버
const io = socketIo(server); //socket서버

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

//소켓서버
io.on('connection', (socket) => {
    //socket: 접속한 웹브라우저
    //io: 접속해있는 모든 웹브라우저
    //웹브라우저가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
    //console.log(socket.id);
    //채팅방 만들기
    socket.on('create', (res, cb) => {
        //join(방이름): 해당 방이름이 없으면 생성. 존재하면 입장
        console.log(res);
        socket.join(res.roomName);
        console.log('방생성 후', socket.rooms);
        //sokcet객체안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        //나를 제외한 모든 방사람에게 메세지 전달
        socket.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다`);
        cb();
    });
    //메세지
    socket.on('sendMessage', (res) => {
        console.log(res);
        const { message, user } = res;
        //특정방에 전체사용자에게 메세지 보내기
        io.to(socket.roomName).emit('newMessage', { message, user });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

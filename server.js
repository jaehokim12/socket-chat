const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);
app.set('view engine', 'ejs');
app.get('/chat', function (요청, 응답) {
  res.render('chat.ejs');
});
http.listen(8080, function () {
  console.log('lisenting 8080');
});

io.on('connection', function (socket) {
  console.log('연결되었습니다.');
  socket.on('인삿말', function (data) {
    console.log(data);
    io.emit('퍼트리기', data);
  });
});

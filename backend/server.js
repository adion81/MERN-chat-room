const express = require('express'),
    app = express(),
    port = 5000,
    server = app.listen(port, ()=> console.log(`Listening on port ${port}`)),
    io = require('socket.io')(server);

var messages = [];
io.on('connection', (socket) => {
    socket.on('open',() =>{
        io.emit('messages', {
            messages: messages
        })
    })
    socket.emit('greeting', {
        message: 'Greetings from the server using sockets!!!'
    });
    socket.on('thanks', (data) => {
        console.log(data.message);
    });
    socket.on('subscribeTimer', (interval) => {
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        setInterval(() =>{
            socket.emit('timer', {
                time: new Date().toLocaleTimeString(),
                date: new Date().toLocaleDateString('ar-EN', options)
            });
        }, interval);
    });
    socket.on('sendingMessage', (data) => {
        console.log(data);
        messages.push(data);
        socket.emit('messages', {
            messages: messages
        })
    })
    
});
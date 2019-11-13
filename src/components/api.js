import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');



function subscribeToTimer(cb){
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeTimer', 1000);
}
function initialSubscribe(cd){
    socket.emit('open');
}
function subscribeToMessages(cb){
    socket.on('messages', messages => cb(null, messages));
}
function sendToMessages(message){
    socket.emit('sendingMessage', message)
}

export { subscribeToTimer , subscribeToMessages, sendToMessages , initialSubscribe}


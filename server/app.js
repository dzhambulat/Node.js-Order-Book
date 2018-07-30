import createOrder from './order';
import createBalance from './balances';
import Exchange from './exchange';

var io = require('socket.io').listen(5000);

let orders = createOrder();
//let balances = createBalance();
let exchange = new Exchange(orders);
exchange.putOrder({type:'buy',price:10, count: 5});
exchange.putOrder({type:'buy',price:10, count: 5});
exchange.putOrder({type:'buy',price:10, count: 5});
exchange.putOrder({type:'sell',price:10, count: 5});


orders.on('processed', (data) => {
    console.log(data);
})
console.log('a');

io.sockets.on('connection', function (socket) {

	socket.on('message', function (msg) {
        console.log(msg);
		var time = (new Date).toLocaleTimeString();
		// Уведомляем клиента, что его сообщение успешно дошло до сервера
		socket.json.send({'event': 'messageSent', 'name': ID, 'text': msg, 'time': time});
		// Отсылаем сообщение остальным участникам чата
		socket.broadcast.json.send({'event': 'messageReceived', 'name': ID, 'text': msg, 'time': time})
	});
	// При отключении клиента - уведомляем остальных
	socket.on('disconnect', function() {
		var time = (new Date).toLocaleTimeString();
		io.sockets.json.send({'event': 'userSplit', 'name': ID, 'time': time});
	});
});
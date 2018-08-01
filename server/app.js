import createOrder from './order';
import createBalance from './balances';
import Exchange from './exchange';

var io = require('socket.io').listen(5000);
var sourceMap = new Map();
let orders = createOrder();
//let balances = createBalance();
let exchange = new Exchange(orders);
exchange.putOrder({type:'buy',price:10, count: 5});
exchange.putOrder({type:'buy',price:10, count: 5});
exchange.putOrder({type:'buy',price:10, count: 5});
exchange.putOrder({type:'sell',price:10, count: 5});


orders.on('processed', (data) => {
  //  sourceMap.get(data.id).('order_processed', data);
})

io.sockets.on('connection', function (socket) {

	socket.on('init', function (msg) {
        console.log(msg);
        var time = (new Date).toLocaleTimeString();
        sourceMap.set(msg.id, socket);
		//socket.json.send({'event': 'order_end', 'name': ID, 'text': msg, 'time': time});
		//socket.broadcast.json.send({'event': 'order_processed', 'name': ID, 'text': msg, 'time': time})
    });
    socket.on('order', function (msg) {
        console.log(msg);
        exchange.putOrder({type: msg.order, price: msg.price, count: msg.count});
    })
	socket.on('disconnect', function() {
		var time = (new Date).toLocaleTimeString();
		//io.sockets.json.send({'event': 'userSplit', 'name': ID, 'time': time});
	});
});
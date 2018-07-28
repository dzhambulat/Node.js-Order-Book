import createOrder from './order';
import createBalance from './balances';
import Exchange from './exchange';
let orders = createOrder();
//let balances = createBalance();

orders.putBuyOrder({price:10, count: 5});
orders.putBuyOrder({price:3, count: 5});
orders.putBuyOrder({price:4, count: 5});
orders.putSellOrder({price: 5, count: 5});
orders.on('processed', (data) => {
    console.log(data);
})
console.log('a');
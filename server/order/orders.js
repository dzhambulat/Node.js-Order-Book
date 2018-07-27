import PriorityQueue from 'priorityqueue';
export class OrderError
{

}

export class Orders
{
    
    constructor() {
        console.log("Orders");
        this.sell_orders = PriorityQueue({comparator: (a, b)=>
            b.price - a.price 
        });
        this.buy_orders = PriorityQueue({comparator: (a, b)=>
            a.price - b.price 
        });
    }

    checkOrder(order) {
        return true;
    }

    makeExchangeResult(count,price)
    {
        return {
            count:count,
            price:price
        }
    }

    makeExchange()
    {
        let buyOrder = this.buy_orders.top();
        let sellOrder = this.sell_orders.top();

        const exchangeResult = [];
        console.log(buyOrder.price);
        while (buyOrder && sellOrder && buyOrder.price >= sellOrder.price)
        {
            if (buyOrder.count <= sellOrder.count)
            {
                exchangeResult.push(this.makeExchangeResult(buyOrder.count, sellOrder.price))
                this.buy_orders.pop();
                sellOrder.count -=buyOrder.count;
                if (sellOrder.count === 0)
                {
                    this.sell_orders.pop();
                }
            }
            else 
            {
                exchangeResult.push(this.makeExchangeResult(sellOrder.count, sellOrder.price));
                buyOrder.count -= sellOrder.count;
                this.sell_orders.pop();
            }
            buyOrder = this.buy_orders.top();
            sellOrder = this.sell_orders.top();
        }

        return exchangeResult;
    }

    putSellOrder(order){
        if (!this.checkOrder(order))
        {
            throw new OrderError();
        }
        this.sell_orders.push(order);
        return this.makeExchange();
    }

    putBuyOrder(order) {
        if (!this.checkOrder(order))
        {
            throw new OrderError();
        }
        this.buy_orders.push(order);
        return this.makeExchange();

    }
}
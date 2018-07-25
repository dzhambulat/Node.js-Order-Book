import queue from 'node-priority-queue';
export class OrderError
{

}

export class Orders
{
    
    constructor() {
        console.log("Orders");
        queue.createEmptyQueue();
        this.sell_orders.setPropertyToPrioritize("price", -1);
        this.buy_orders = queue.createEmptyQueue();
    }

    checkOrder(order) {
        return true;
    }

    makeExchange()
    {
        let buyOrder = this.buy_orders.pop();
        console.log(buyOrder.price);
        while (buyOrder.price >= sellOrder.price)
        {
            if (buyOrder.count <= sellOrder.count)
            {
                // make buyOrder , then delete it
                
            }
            else 
            {
                // remove sell order, update buyorder
            }

          //  buyrder = this.buyOrders
        }
    }

    putSellOrder(order){
        if (!checkOrder(order))
        {
            throw new OrderError();
        }
        this.sell_orders.addElement(order);
        this.makeExchange();
    }

    putBuyOrder(order) {
        if (!checkOrder(order))
        {
            throw new OrderError();
        }
        this.buy_orders.addElement(order);
        this.makeExchange();

    }
}
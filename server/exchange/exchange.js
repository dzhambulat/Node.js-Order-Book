import EventEmmiter from 'events';

export class Exchange
{
    constructor (orders)
    {
        this.orders = orders;
    }

    putOrder(order)
    {
        if (order.type === 'buy')
        {
            this.orders.putBuyOrder(order);
        } else if (order.type === 'sell')
        {
            this.orders.putSellOrder(order);
        }
    }
}
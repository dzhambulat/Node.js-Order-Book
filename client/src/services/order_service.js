import io from 'socket.io-client';
import {getIdService} from './id_service';

const getOrderService = (address) => {
    return new OrderService(address);
}

class OrderService 
{
    constructor(address)
    {
        this.address = address;    
        this.idService = getIdService();
        this.socket = io.connect(address, {reconnect: true});
        this.socket.on('connect', function (socket) {
            console.log('Connected!');
        })
        .on('connect_failed',)
        
        this.socket.emit('init', {
            id: this.idService.getCurrentId()
        });
    }

    sendBuyOrder({price, count})
    {
        return new Promise((resolve, reject) =>{
            if(this.socket.connected)
            {
                this.socket.emit('order',{
                    price: price,
                    count: count,
                    type: 'buy'
                    }
                )
                resolve();
            }
            else {
                reject("Socket is not connected");
            }
        })
    }
    
    sendBuyOrder({price, count})
    {
        return new Promise((resolve, reject) =>{
            if(this.socket.connected)
            {
                this.socket.emit('order',{
                    price: price,
                    count: count,
                    type: 'sell'
                    }
                )
                resolve();
            }
            else {
                reject("Socket is not connected");
            }
        })
    }
}
export  {getOrderService}
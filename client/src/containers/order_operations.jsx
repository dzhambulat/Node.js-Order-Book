import React from 'react';
export default  ( props ) => {
    const onSubmit = fn => e => {
        e.preventDefault()
        let order = {
            count: e.target.buy_count.value,
            price: e.target.buy_price.value
        }
        props.buyOrder(order);
        return false;
      }
    return (
        <form onSubmit={onSubmit()}>
        <div> Buy Order </div>
        <label for="buy_count">Count</label>
        <input type="text" name="buy_count"></input>
        <label for="buy_price">Price</label>
        <input type="text" name="buy_price"></input>
        <button></button>
        </form>
        
    )
}
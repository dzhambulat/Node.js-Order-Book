import React from 'react';
export default  ( props ) => {
    const onSubmit = fn => e => {
        e.preventDefault()
        const city = e.target.buy_count.value // Access elements through `form`
        alert(city)
        return false;
      }
    return (
        <form onSubmit={onSubmit()}>
        <div> Hello </div>
        <input type="text" name="buy_count"></input>
        <input type="text" name="sell_count"></input>
        <button></button>
        </form>
    )
}
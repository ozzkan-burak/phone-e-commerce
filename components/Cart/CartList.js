import React from 'react'

//custom components
import CartItem from './CartItem';

const CartList = ({value}) => {
  const {cart} = value;
  console.log(value, cart);

  return (
    <div className="container-fluid">
      {cart.map(item=> {
        return <CartItem key={item.id} item={item} value={value} />
      })}
    </div>
  )
}

export default CartList;

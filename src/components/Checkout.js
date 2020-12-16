import React from 'react'
import './checkout.css'
import SubTotal from '../pages/SubTotal'
import {useStateValue} from '../pages/StateProvider'
import CheckoutProduct from '../pages/CheckoutProduct'

export default function Checkout() {

    const [{basket,user},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <h3>HELLO, {user?.email}</h3>
                <h2 className="checkout_title">YOUR SHOPPING BASKET</h2>

                {basket.map(item =>(
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        price = {item.price}
                        image = {item.image}
                    />
                ))}
            </div>
            <div className="checkout_right">
                <SubTotal/>
            </div>
        </div>
    )
}

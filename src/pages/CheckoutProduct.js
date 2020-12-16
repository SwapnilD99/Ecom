import React from 'react'
import './checkoutProduct.css';
import {useStateValue} from "../pages/StateProvider";

export default function CheckoutProduct({id,image,title,price}) {
    const [{basket},dispatch] = useStateValue();
     const removeFromBasket = () =>{
         dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
         })
     }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="aa" className="checkoutProduct_image"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_tilte">{title}</p>
                <p className="checkoutProduct_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket} className="button">Remove From Basket</button>
            </div>
        </div>
    )
}

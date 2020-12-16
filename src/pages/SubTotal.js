import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import {getBasketTotal} from './reducer'
import { useHistory } from 'react-router-dom'

export default function SubTotal() {
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) =>(
                    <>
                        <p>SubTotal ({basket.length} items) : <strong>{value}</strong></p>
                        
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"Rs."}
            />
            <button className="proceed_button" onClick={e => history.push('/payment')}>PROCEED TO CHECKOUT</button>
        </div>

    )
}

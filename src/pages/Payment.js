import { useElements, useStripe , CardElement} from '@stripe/react-stripe-js';
import React, { useState , useEffect} from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import axios from "./axios"




function Payment() {

    const [{user,basket},dispatch] = useStateValue();
   
    const stripe = useStripe();
    const Elements = useElements();
    const history = useHistory();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] = useState(false);

    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async() => {
            const response = await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)}`,
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('the secret is >>>',clientSecret)

    const handleSubmit = async(event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                 card : Elements.getElements(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/')
        })

    }

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error? event.error.messgae : "");
    }

    
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout(<Link to='/checkout' className="link">{basket.length} Items</Link>)</h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>DeliveryAddress</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>28,SouthSun Avenue,Bhopal</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Items In The Cart</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item =>(
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                price = {item.price}
                                image = {item.image}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                        <div className="payment_details">
                            <form action={handleSubmit} className="form">
                                <CardElement onChange={handleChange}/>
                                <div className="payment_cardContainer">
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                            <h3>Order Total: {value}</h3>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeperator={true}

                                        prefix={"$"}
                                    />
                                    <button disabled={processing||disabled||succeeded}>
                                        <span>{processing ? <p>Processing</p> : "BUY NOW"}</span>
                                    </button>
                                </div>

                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

import React,{useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/LoginPage'
import Checkout from './components/Checkout'
import Payment from './pages/Payment'
import { auth } from './firebase';
import {useStateValue} from './pages/StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HwmsJKFbsE0XfWStX1lwAFmhpjA3AtRQXqsJ8aB0v6iFVzAbEOSEo5U4rr1K4GXBf10HMan1J7GwM6DVWzVQ3EA00TzUVnVRu');

function App() {

  const [{basket},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>>" ,authUser);
      
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser,
        })

      }else{
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })

  },[])

  return(
    <>
    <Router>
    <div className="App">
        <Switch>
          <Route path="/Orders">
            <Navbar/>
            <h1>YOUR ORDERS</h1>
          </Route>
          <Route path="/sign-up">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Navbar/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Navbar/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            
          </Route>
          <Route path="/">
            <Navbar/>
            <Home/>
          </Route>
          
          
         
        </Switch>  
        
         
    </div>
    </Router>
    </>
  )
}

export default App;

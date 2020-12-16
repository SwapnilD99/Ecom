import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from "../image/logo.png";
import {useStateValue} from '../pages/StateProvider';
import { auth } from '../firebase';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const [{basket,user},dispatch] = useStateValue();

  const handleAuthentication  = () => {
     if(user){
       auth.signOut();
     }
  }

  return (
    <>
      
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            EMART
            

          </Link>
          <div className="logo-img">
              <img src={logo} alt="logo" className="logo"/>
          </div>
      
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Orders'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                YourOrders
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/checkout'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class="fas fa-cart-arrow-down"></i>
                <span className="cart_item_number" style={{marginLeft:6}}>{basket?.length}</span>
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={handleAuthentication}>{user?"SIGN OUT":"SIGN IN"}</Button>}
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
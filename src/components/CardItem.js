import React from 'react';
import {useStateValue} from '../pages/StateProvider'


function CardItem(props) {

  const [{basket} ,dispatch] = useStateValue();

  console.log("this is the basket>>>>",basket);

  const addToBasket = () =>{
      dispatch({
        type:"ADD_TO_BASKET",
        item:{
          id :props.p_id,
          image : props.src,
          title : props.name,
          price : props.price,
        }
      })
  }


  return (
    <>
   
    
      <li className='cards__item'>
        
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='hello'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.name}</h5>
            <p className="card_item_discription">{props.discription}</p>
            
            <p className="product_price"><small>Rs.</small><strong>{props.price}</strong></p>
          </div>
          <button className="button" onClick={addToBasket}>ADD TO CART</button>
        </div>
     
        
      </li>
   
    </>
  );
}


export default CardItem;
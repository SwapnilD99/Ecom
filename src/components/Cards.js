import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import WashingMachine from '../image/elec.jpg'
import Tv from '../image/tv.jpg'
import Shoe from '../image/shoes.jpg'
import Tracksuit from '../image/tracksuit.jpg'
import Laptop from '../image/laptop.jpg'
import Mobile from '../image/mobile.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>What You Want To Buy!!!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src={WashingMachine}
              p_id="1234555"
              name='LG Washing Machine 9KG'
              label='SHOP NOW'
              path='/Orders'
              discription='Fully-automatic front load washing machine: best wash quality, energy and water efficient'
              price = "40000.00"
            />
            
            <CardItem
              src={Shoe}
              p_id="1234555"
              name='Nike Men  ultras flex | sneakers ' 
              label='SHOP NOW'
              path='/Orders'
              discription='Closure: Lace-Up
              Shoe Width: Medium
              Material Type: Mesh
              Lifestyle: Sports
              Closure Type: Lace-Up'
              price = "6000.00"
            />
            
             
            <CardItem
              src={Tv}
              p_id="1234555"
              name='Mi TV 4A PRO 108 cm (43 Inches)'
              label='SHOP NOW'
              path='/Orders'
              discription='Resolution : Full HD (1920x1080) | Refresh Rate: 60 hertz Smart TV Features :Built-In Wi-Fi | PatchWall | Netflix | Prime Video |'
              price = "22499.00"
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src={Tracksuit}
              p_id="1234555"
              name='PUMA | MEN TRACK SUIT'
              label='SHOP NOW'
              path='/Orders'
              discription='
             
              Material Information
              Pocket Bag: 100% cotton
              Rib: 97% cotton, 3% elastane
              Shell: 34% polyester, 66% cotton'
              price = "4000.00"
            />
            
            <CardItem
              src={Laptop}
              p_id="1234555"
              name='HP 15s gr0008au 15.6-inch Laptop ' 
              label='SHOP NOW'
              path='/Orders'
              discription='Ryzen 3 3250U/4GB/1TB HDD + 256GB SSD/Windows 10 Home/AMD Radeon Graphics, Natural Silver'
              price = "60000.00"
            />
            
             
            <CardItem
              src={Mobile}
              p_id="1234555"
              name='Samsung Galaxy A50 (Blue, 64 GB)  (4 GB RAM)'
              label='SHOP NOW'
              path='/Orders'
              discription='4 GB RAM | 64 GB ROM | Expandable Upto 512 GB
              25MP + 5MP + 8MP | 25MP Front Camera
              Exynos 9610 Processor
              Super AMOLED Display'
              price = "20000.00"
            />
          </ul>
        
         
        </div>
      </div>
    </div>
  );
}

export default Cards;
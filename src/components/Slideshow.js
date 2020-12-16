import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './imageslide.css'
import slide_1 from '../image/SlideImage/slide_1.jpg'
import slide_2 from '../image/SlideImage/slide_2.jpg'
import slide_3 from '../image/SlideImage/slide_3.jpg'


const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease" style={{pauseOnHover:false,duration:200}}>
          <div className="each-slide">
            <div id="slide">
              <img src={slide_1} alt=""/>
            </div>
          </div>
          <div className="each-slide">
            <div id="slide">
              <img src={slide_2} alt=""/>
            </div>
          </div>
          <div className="each-slide">
            <div id="slide">
              <img src={slide_3} alt=""/>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
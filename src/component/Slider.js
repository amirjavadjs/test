import React, { Component } from 'react'
import  './Slider.css'
import {Carousel} from 'react-bootstrap'
export default class Slider extends Component {
    render() {
        return (
            <div  className="one">
                <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
    
    />
    <Carousel.Caption>
      <h3>ورزش رزمی سمبکالاه</h3>
      <p>سمبکالاه ترکیب دوازده فنون ورزشی و فنون مختص به خود را آموزش میدهد</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"

      
    />

    <Carousel.Caption>
      <h3>ورزش رزمی سمبکالاه</h3>
      <p>سمبکالاه ترکیب دوازده فنون ورزشی و فنون مختص به خود را آموزش میدهد</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      
      
    />

    <Carousel.Caption>
      <h3>ورزش رزمی سمبکالاه</h3>
      <p>سمبکالاه ترکیب دوازده فنون ورزشی و فنون مختص به خود را آموزش میدهد</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

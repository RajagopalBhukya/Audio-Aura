import './slider.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls ={false} interval={800}>
      <Carousel.Item className='images'>
       <img src='/images/products/jbl660nc-1.png' alt="" className='img-fluid'/>
        <Carousel.Caption className='text'>
      <h1 className='back-ground-text'>Over Ear</h1>
      
            <h4 className='normal-text1'>JBL Live 660nc</h4>
            <h2 className='normal-text'>Keep The Noice Out,<br />Or In You Choose</h2>
            <h3 className='normal-text2'>₹9,999 <strike>₹14,999</strike></h3> 
            <button className='btn btn-danger mt-4 font-weight-bold buttontag'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
       <img src="/images/products/boat131-3.png" alt="" className='img-fluid' />
        <Carousel.Caption className='text' >
        <h1 className='back-ground-text'>In Ear</h1>

             <h4 className='normal-text1'>boat Airdopes 131</h4>
          <h2 className='normal-text'>Featherweight For <br />Comfort All Day.</h2>
            <h3 className='normal-text2'>₹1,099 <strike>₹2,990</strike></h3> 
            <button className='btn btn-danger mt-4 font-weight-bold buttontag'>Shop Now</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='images'>
       <img src="/images/products/sonyXb910n-1.png" alt="" className='img-fluid'/>

        <Carousel.Caption className='text'>  
          <h1 className='back-ground-text'>Over Ear</h1>

          <h4 className='normal-text1'>Sony WH-XB910N</h4>
            <h2 className='normal-text'>Give Your Favourite<br/>Music A Boost.</h2>
            <h3 className='normal-text2'>₹13,498 <strike>₹19,990</strike></h3> 
            <button className='btn btn-danger mt-4 font-weight-bold buttontag'>Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
import React from 'react';
import background from '../assets/homebackground.png';
import '../styles/Home.css';

const Home = () => {
  return (

      <div className='home-background-image'>
        <img src={background} alt='Background' />
       
        <button className='Button' onClick={() => window.location.assign('/Products')}>
           Products List
        </button>
        <div className='Text'  >
        Click here to see all products
        </div>
      </div>
   
  );
}

export default Home;

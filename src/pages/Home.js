import React from 'react';
import background from '../assets/homebackground.png';
import '../styles/Home.css';

const Home = () => {
  return (

      <div className='home-background-image'>
        <img src={background} alt='Background' />
        <button className='Button' onClick={() => window.location.assign('/products')}>
          Products List
        </button>
      </div>
  );
}

export default Home;

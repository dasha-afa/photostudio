import React from 'react';
import Button from '../Button/Button';
import './Hero.css';
import girl from '../../Assets/Rectangle17.png'
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='hero'>
        <section>
            <div className='container'>
                <h1>Elevate Your Moments with CubyStudio:</h1>
                <p className='subheading'>Exceptional photography, endless memories</p>
                <Link to='/book_photosession'>
                  <Button text={'BOOK NOW'} contur={'#4C4C4C'} bgcolor={'white'}></Button>
                </Link>
            </div>

            <div className='img_container'>
                <img src={girl} className='hero_image' alt='girl'></img>
            </div>
        </section>
    </div>
  )
}

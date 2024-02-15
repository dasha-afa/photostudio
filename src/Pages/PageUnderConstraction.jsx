import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import './PageUnderConstraction.css'
import { Link } from 'react-router-dom';

export default function PageUnderConstraction() {
  return (
    <div className='constraction_section'>
        <Header></Header>
        <div className='constraction_container section'>
            <div className='constraction_text_container'>
                <h1>oops, this page is under constraction</h1>
                <Link to='/'>
                <Button text={'back homepage'}></Button>
                </Link>
            </div>
            <div className='constraction_img_container'>
                <img className='constraction_img' src='/Images/unsplash_constractor.png' alt='Girl sitting on the floor'></img>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

import React from 'react';
import './AboutCard.css';

export default function AboutCard(props) {
  return (
    <div className={'about_card ' + props.class}>
        <img className='about_img' src={props.imgPath} alt='girl_in_field'></img>
        <svg width="6" height="66" viewBox="0 0 6 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 59.9454C1.52724 59.9454 0.333331 61.1393 0.333331 62.6121C0.33333 64.0848 1.52724 65.2787 3 65.2787C4.47276 65.2787 5.66666 64.0848 5.66666 62.6121C5.66666 61.1393 4.47276 59.9454 3 59.9454ZM2.5 0.41394L2.5 62.6121L3.5 62.6121L3.5 0.41394L2.5 0.41394Z" fill="#212121"/>
        </svg>
        <p className='about_p'>{props.text}</p>
    </div>
  )
}

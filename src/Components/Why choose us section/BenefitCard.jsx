import React from 'react';
import './BenefitCard.css';

export default function BenefitCard(props) {
  return (
    <div className='benefit_card'>
        <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 39">
        <path d="M0 24.6121C0 11.3573 10.7452 0.612122 24 0.612122H102C115.255 0.612122 126 11.3573 126 24.6121V101.612C126 114.867 115.255 125.612 102 125.612H24C10.7452 125.612 0 114.867 0 101.612V24.6121Z" fill="#F2F2F2"/>
        <g id="Group 1">
        <rect id="Rectangle 13" x="28.8795" y="41.2205" width="68.241" height="44.7831" rx="10" stroke="#212121" stroke-width="2"/>
        <path id="Vector 3" d="M51.1024 63.7665L62.8455 72.4194L74.8976 54.8047" stroke="#212121" stroke-width="2" stroke-linecap="round"/>
        </g>
        </g>
        </svg>

        <h4 className='benefit'>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

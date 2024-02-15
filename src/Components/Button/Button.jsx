import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <div>            
        <button onClick={props.onClick} type={props.buttonType} className={'primary_button ' + props.class}>
        <div className='btn' >
            {props.text}
        </div>
    </button>
    </div>
  )
}

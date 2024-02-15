import React from 'react'
import SmallArrowUp from '../../Assets/small_arrow_up'
import './PortfolioCard.css'
import { Link } from 'react-router-dom'

export default function PotfolioCard(props) {
  return (
    <Link to={'/portfolio/' + `${props.case}`}>
    <div className='portfolio_card_container'>
        <div className='portfolio_img_container'>
            <img className='portfolio_photo' src={props.imgUrl} alt={props.imgAlt}></img>
        </div>
        <div className='card_text_content'>
            <div className='title_arrow_container'>
                <h3>{props.title}</h3>
                <div className='arrow_icon'>
                    <SmallArrowUp></SmallArrowUp>
                </div>
            </div>
            <p className='photographer_name'>{props.photographer}</p>
        </div>
    </div>
    </Link>
  )
}

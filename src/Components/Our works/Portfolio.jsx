import React from 'react'
import './Portfolio.css'
import Button from '../Button/Button'
import PotfolioCard from './PotfolioCard'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className='section darker'>
        <div className='portfolio_header'>
            <h1 className='portfolio_h1'>our works</h1>

            <Link to='/portfolio'>
            <Button class={"secondary_button_light"} text={"more projects"}></Button>
            </Link>
        </div>
        <div className='porfolio_card_container'>
            <PotfolioCard 
                case={"90's Photosession"}
                imgUrl={'/Images/unsplash_90s.png'}
                imgAlt={"90's girl"}
                title={"90's Photosession"}
                photographer={'Photographer: Josh Canon'}>
            </PotfolioCard>

            <PotfolioCard 
                case={"Modern Style"}
                imgUrl={'/Images/unsplash_modern.png'}
                imgAlt={'Photo of modern girl'}
                title={'Modern Style'}
                photographer={'Photographer: Millie Carpenter'}>
            </PotfolioCard>

            <PotfolioCard 
                case={'Grange Photosession'}
                imgUrl={'/Images/unsplash_grange.png'}
                imgAlt={'Stylish girl on green background'}
                title={'Grange Photosession'}
                photographer={'Photographer: Julia Wong'}>
            </PotfolioCard>
        </div>
    </div>
  )
}

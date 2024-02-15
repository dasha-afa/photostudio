import React from 'react';
import './AboutUs.css';
import AboutCard from './AboutCard';
import cardPhoto from '../../Assets/photo_girl_field.png'

export default function AboutUs() {
  return (
    <div className='section'>
        <h1>ABOUT US</h1>
        <div className='about_cards_container'>
            <AboutCard
                imgPath = {cardPhoto}
                text = {'Established in 2019, our photo studio embarked on a journey fueled by passion and a commitment to visual excellence. '}
            />

            <AboutCard class={'about_card_reverse'}
                imgPath = {cardPhoto}
                text = {'Over the years, our team of dedicated professionals has honed their skills, embracing technological advancements and artistic innovations.'}
            />

            <AboutCard
                imgPath = {cardPhoto}
                text = {'Committed to personalized service, we have built lasting relationships with our clients, transforming their ideas into timeless visuals.'}
            />
        </div>
    </div>
  )
}

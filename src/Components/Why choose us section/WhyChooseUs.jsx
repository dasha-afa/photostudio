import React from 'react';
import './WhyChooseUs.css';
import BenefitCard from './BenefitCard';

export default function WhyChooseUs() {
  return (
    <div className='mian_section_why_choose_us'>
        <h1 className='why_choose_us_h1'>WHY CHOOSE US</h1>

        <div className='cards_container'>
            <BenefitCard
                heading={'Expertise:'}
                text={'Our skilled photographers bring years of experience, ensuring every shot is a masterpiece.'}
            />

            <BenefitCard
                heading={'Cutting-Edge Technology:'}
                text={'Equipped with state-of-the-art equipment, we deliver high-quality, modern imagery.'}
            />

            <BenefitCard
                heading={'Personalized Service:'}
                text={'Tailored sessions catered to your preferences, making each photo shoot a personalized experience.'}
            />
        </div>
    </div>
  )
}

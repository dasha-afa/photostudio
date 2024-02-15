import React from 'react'
import Faq from "react-faq-component";
import './FAQ.css'

const data = {
    rows: [
        {
            title: "How do I schedule a photo session?",
            content: `Scheduling a session is easy! Simply visit our website and use our online booking system or give us a call to find a time that suits you best.`,
        },
        {
            title: "What should I wear for my photo session?",
            content: "We recommend wearing outfits that make you feel comfortable and confident. Solid colors and coordinating tones often work well, but the most important thing is that you feel like yourself.",
        },
        {
            title: "Can I bring props or specific ideas for my shoot?",
            content: `Absolutely! We encourage personalizing your session. Feel free to bring props or share any specific ideas you have in mind, and we'll work together to create the perfect shots.`,
        },
        {
            title: "Do you offer digital files, prints, or both?",
            content: "We provide high-resolution digital files for your convenience, and we also offer a variety of professional print options. You can choose the package that best suits your preferences.",
        },
        {
            title: "How long does it take to receive the final edited photos?",
            content: "Turnaround time varies, but typically you can expect to receive your edited photos within [X] days after the photo session. We prioritize quality, so the wait is worth it!",
        }
    ],
};

const styles = {
    
};

const config = {
    animate: true,
    tabFocus: true,
    arrowIcon: <svg width="40" height="40" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="majesticons:arrow-up" clip-path="url(#clip0_15_318)">
                <path id="Vector" d="M32.4534 8.27929V27.5947M32.4534 8.27929H13.1379M32.4534 8.27929L13.5197 27.213" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_15_318">
                <rect width="33.2955" height="33.2955" fill="white" transform="translate(34 0.907471) rotate(90)"/>
                </clipPath>
                </defs>
                </svg>
    
};

export default function FAQ() {
  return (
    <div className='section'>
        <div className='faq_container'>
            <h1>frequently asked questions</h1>
            <Faq className="faq_blocks"
                data={data}
                styles={styles}
                config={config}
            />
            </div>

    </div>
  )
}

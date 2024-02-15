import React, { useState } from 'react'
import './Feedback.css'
import Button from '../Button/Button'
import {myFeedbacks} from '../../Assets/Feedback.js'

export default function Feedback() {
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(myFeedbacks[index].imgUrl)
    const [heading, setHeading] = useState(myFeedbacks[index].heading)
    const [paragraph, setParagraph] = useState(myFeedbacks[index].paragraph)

    function handleClick(buttonType) {
        const newIndex = buttonType === 'next' ? index + 1 : index - 1;

        if (checkValidIndexes(newIndex)) {
            setNewData(newIndex)
            setIndex(newIndex)
        }
        else {
            setNewData(0)
            setIndex(0)
        }    
    }

    function checkValidIndexes(newIndex) {
        return newIndex >= 0 && newIndex < myFeedbacks.length
    }

    function setNewData(newIndex) {
        setImage(myFeedbacks[newIndex].imgUrl)
        setHeading(myFeedbacks[newIndex].heading);
        setParagraph(myFeedbacks[newIndex].paragraph);
    }

  return (
    <div className='section'>
        <h1>CLIENTS FEEDBACK</h1>
        <div className='feedback_img' style={{"backgroundImage": `url(${image})`}}></div>
        <div className='feedback_container'>
            <div className='feedback_text_container'>
                <h2 className='feedback_h2'>{heading}</h2>
                <p className='feedback_p'>{paragraph}</p>
            </div>
            <div className='buttons_container'>
                <Button 
                    buttonType={'button'}
                    onClick={() => handleClick('previous')}
                    text={
                        <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="arrow1" d="M0.559494 8.50105C0.168972 8.11053 0.168972 7.47736 0.559494 7.08684L6.92346 0.722878C7.31398 0.332353 7.94715 0.332353 8.33767 0.722878C8.72819 1.1134 8.72819 1.74657 8.33767 2.13709L2.68082 7.79395L8.33767 13.4508C8.72819 13.8413 8.72819 14.4745 8.33767 14.865C7.94715 15.2555 7.31398 15.2555 6.92346 14.865L0.559494 8.50105ZM35.6333 8.79395H1.2666V6.79395H35.6333V8.79395Z" fill="#4C4C4C"/>
                        </svg>} 
                    class={'secondary_button_dark'}></Button>
                <Button
                    buttonType={'button'}
                    onClick={() => handleClick('next')}
                    text={
                        <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="arrow1" d="M35.7071 8.50105C36.0976 8.11053 36.0976 7.47736 35.7071 7.08684L29.3431 0.722878C28.9526 0.332353 28.3195 0.332353 27.9289 0.722878C27.5384 1.1134 27.5384 1.74657 27.9289 2.13709L33.5858 7.79395L27.9289 13.4508C27.5384 13.8413 27.5384 14.4745 27.9289 14.865C28.3195 15.2555 28.9526 15.2555 29.3431 14.865L35.7071 8.50105ZM0.633301 8.79395H35V6.79395H0.633301V8.79395Z" fill="#4C4C4C"/>
                        </svg>}
                    class={'secondary_button_dark'}></Button>
            </div>
        </div>
    </div>
  )
}

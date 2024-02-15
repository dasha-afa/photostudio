import React from 'react'
import './Form.css'
import Button from '../Button/Button'

export default function ContactUsForm() {
  return (
    <div className='section'>
        <div className='form_container darker'>
            <div className='left_sidebar'>
            <h1>Let's discuss your project</h1>
            <form>
                <div className='input_container'>
                    <label for="name">Name:</label>
                    <input type="text" placeholder='John Doe' id="name" name="name" required></input>
                </div>

                <div className='input_container'>
                    <label for="email">Email:</label>
                    <input type="email" placeholder='johndoe@gmail.com' id="email" name="email" required></input>
                </div>

                <div className='input_container'>
                    <label for="message">Message:</label>
                    <textarea id="message" placeholder='Describe your project' name="message" rows="4"></textarea>
                </div>

            <Button type={'submit'} text={'confirm'} class={'secondary_button_dark'}></Button>
            </form>
            </div>
        <div className='form_img'>
            <img className='form_image' src='/Images/unsplash_form1.png' alt='Girl in red T-shirt'></img>
        </div>
        </div>
    </div>
  )
}

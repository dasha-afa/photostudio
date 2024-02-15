import React from 'react'
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero section/Hero'
import WhyChooseUs from '../Components/Why choose us section/WhyChooseUs';
import AboutUs from '../Components/About Us/AboutUs';
import Feedback from '../Components/Clients feedback/Feedback';
import FAQ from '../Components/FAQ/FAQ';
import Portfolio from '../Components/Our works/Portfolio';
import Footer from '../Components/Footer/Footer';
import ContactUsForm from '../Components/Form/Form';

export default function 
() {
  return (
    <div>
        <Header></Header>
        <Hero></Hero>
        <WhyChooseUs></WhyChooseUs>
        <AboutUs></AboutUs>
        <Portfolio></Portfolio>
        <FAQ></FAQ>
        <Feedback></Feedback>
        <ContactUsForm></ContactUsForm>
        <Footer></Footer>
    </div>
  )
}

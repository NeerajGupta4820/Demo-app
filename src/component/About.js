import React from 'react'
import "./About.css"
const About = () => {
  return (
    <>
         <div>
  <section id="page-header" className="about-header">
    <h2 className='about-heading'>#About Us</h2>
    <p>We help producers manage e-waste responsibly</p>
  </section>
  <section id="about-head" className="section-p1">
    <img src="images/a6.jpg" alt />
    <div className='about'>
      <h2>Who We Are?</h2>
      <br/>
      <h3> Remine eWaste Management Ltd. is one of the leading companies of India that recycle e-waste and Li Batteries </h3>
      <br/>
      <p>The biggest hazard to human life is the practice of throwing things away. Throwing away isn’t the solution. Things never go ‘away’ from you. They are still in existence – somewhere posing threat to other innocent lives. You either exterminate it forever or recycle it to save the planet. That’s exactly what WE do!
      If you care for the planet you live in, think of a way to dispose e-waste without causing harm to the environment – think of US.
      We recycle e-waste to give them a new lease of life and help them revolve back again in the economy.</p>
      <p>Remine India Private Limited is a Private incorporated on 06 December 2022. It is classified as Non-govt company and is registered at Registrar of Companies, Uttarakhand. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 1,000,000. It is inolved in Recycling of metal waste and scrap [from rejected aluminum, utensil, containers and other used metallic items etc. Collection of metal waste and scrap for and other used metallic items etc. Collection of metal waste and scrap for recycling is included in 51498.]
</p>
      <br /><br />
      <marquee bgcolor="#ffff00" loop={-1} scrollamount={8} width="100%">We are here to hear you and understand your requirements and provide the qulity works</marquee>
      <button type="button" className='about-btn'>Know More</button>
    </div>
  </section>
  <section id="about-app" className="section-p1">
    <h1>Small piece of<a href="#"> Work</a></h1>
    <div className="video">
      <video autoPlay muted loop src="images/1.mp4" />
    </div>
  </section>
</div>
    </>
  )
}

export default About

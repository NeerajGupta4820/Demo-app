import React from 'react'
import './Contact.css'
const contact = () => {
  return (
    <>
    <div className='main-contact'>
        <div className='submenu'>
            <div className='contactitem'>
                <i class="fa-solid fa-location-dot"></i>
                <h2>Our Main Office</h2>
                <p>WARD NO. 3, SUPRIYA COLONY, SITARGANJ SITARGANJ </p>
                <p>Udham Singh Nagar UR 262405</p>
            </div>      
            <div className='contactitem'>
                <i class="fa-solid fa-phone-volume"></i>
                <h2>Phone Number</h2>
                <p>234-9874-5640</p>
                <p>P88-7777-0123(ToolFree)</p>
            </div>      
            <div className='contactitem'>
                <i class="fa-solid fa-fax"></i>
                <h2>FAX</h2>
                <p>1-234-567-9810</p>
            </div>      
            <div className='contactitem'>
                <i class="fa-solid fa-envelope"></i>
                <h2>Email</h2>
                <p>director@remine.in</p>
            </div>      
        </div>
        <div className='contact'>
        <form >
            <h1>Contact Us</h1>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>Thanks for Contacting Us</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        </div>
    </div>
    </>
  )
}

export default contact

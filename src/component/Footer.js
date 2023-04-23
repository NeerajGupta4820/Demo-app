import React from 'react';
import './Footer.css';
import { FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <footer className="section-p1">
            <div className="col">
                <img className="logofooter" src="images/logo1.jpg" alt />
                <h4>contact</h4>
                <p>WARD NO. 3, SUPRIYA COLONY, SITARGANJ SITARGANJ </p><p>Udham Singh Nagar UR 262405</p>
                <p><strong>Phone:</strong>+01 2222 365/(+91) 01 2345 6789</p>
                <p><strong>Hours:</strong>10:00-18:00,Mon-Sat</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-twitter" />                      
                        <i className="fab fa-instagram" />          
                        <i className="fab fa-pinterest" />         
                        <i className="fab fa-youtube" />              
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; condition</a>
                <a href="#">Contact us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View cart</a>
                <a href="#">My wishlist</a>
                <a href="#">Track my order</a>
                <a href="#">Help</a> 
            </div>
            <div className="col" id="install">
                <h4>Install app</h4>
                <p>From App Stroe or google Play</p>
                <div className="row">
                    <img src="images/app.jpg" alt />
                    <img src="images/play.jpg" alt />
                </div>
                <p>secured payment Getways</p>
                <img id="install" src="images/pay.png" alt />
            </div>
            <div className="copyright">
                <p>@ 2023, Tech2 etc-HTML CSS Ecommerce Template</p>
            </div>
        </footer>

    </>
  )
}

export default Footer

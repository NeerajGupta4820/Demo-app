import React, { Component } from 'react'
import "./Header.css";
class Header extends Component{
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return (
          <>
            <nav className='NavbarItems'>
                <img src='images/logo1.jpg'  alt='' className='logo'/>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
                    <li className='nav-links'><a href='index.html'>
                    <i class="fa-solid fa-house"></i></a>Home</li>
                    <li className='nav-links'><a href='index.html'>
                    <i class="fa-solid fa-arrows-to-dot"></i></a>Collection Center</li>
                    <li className='nav-links'><a href='index.html'>
                    <i class="fa-solid fa-toolbox"></i></a>Recources</li>
                    <li className='nav-links'><a href='index.html'>
                    <i class="fa-solid fa-address-book"></i></a>contact</li>
                    <li className='nav-links'><a href='index.html'>
                    <i class="fa-solid fa-photo-film"></i></a>Gallery</li>
                    <li className='nav-links'><a href='index.html'>
                    <i class="fa-solid fa-people-group"></i></a>Team</li>
                </ul>
            </nav>
          </>
  )
}
}

export default Header

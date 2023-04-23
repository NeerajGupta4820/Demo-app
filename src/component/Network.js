import React from 'react'
import './Network.css'
const Network = () => {
  return (
    <>
        <div className='network'>
            <div className='new-title'>
                <h1>Product Life of Electronics</h1>
            </div>
            <div className='net-row'>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n1.jpg' alt='' classname='img-fluid'  />
                    <h4>Manufacture</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n2.jpg' alt='' classname='img-fluid'  />
                    <h4>Consumer</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n3.jpg' alt='' classname='img-fluid'  />
                    <h4>Retail</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n4.jpg' alt='' classname='img-fluid'   />
                    <h4>Disposal</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n5.jpg' alt='' classname='img-fluid'  />
                    <h4>Collection Center</h4>
                </div>
            </div>
            <div className='network-items'>
                <div className='icon-wrap'>
                    <img src='images/n6.jpg' alt=''  />
                    <h4>Recycled</h4>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Network

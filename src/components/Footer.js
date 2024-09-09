import React from 'react'
import './css/Footer.css'
import paymentIcons from '../assets/footer.png'
import digicert from '../assets/footer right.png'
import logo from '../assets/RIGHTFIT.COM.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={logo} alt={logo} />
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>All Products</a>
              </li>
              <li>
                <a href='/'>Featured Products</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
              <li>
                <a href='/'>About Us</a>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <p>
              We are a registered E-Commerce seller and we support a variety of
              Local and International payment modes
            </p>
            <div className='payment-icons'>
              <img src={paymentIcons} alt='payment options' />
            </div>
          </div>
          <div className='col-md-4'>
            <p>Website protected by</p>
            <img src={digicert} alt='Digicert' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

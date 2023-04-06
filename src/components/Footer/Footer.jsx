import React from 'react'
import "./index.scss"
import icon1 from "../../assets/img/icon1.svg"
import icon2 from "../../assets/img/icon2.svg"
import icon3 from "../../assets/img/icon3.svg"
import icon4 from "../../assets/img/icon4.svg"

const Footer = () => {
  return (
    <footer>
        <div className='container' >
          <div className='footer' >
            <div className='footer__icons' >
              <a href="https://www.facebook.com/" target='_blank' ><img src={icon1} alt="facebook icon" /></a>
              <a href="https://www.instagram.com/" target='_blank'><img src={icon2} alt="instagram icon" /></a>
              <a href="https://twitter.com/" target='_blank'><img src={icon3} alt="twitter icon" /></a>
              <a href="https://www.linkedin.com/feed/" target='_blank'><img src={icon4} alt="linkedin icon" /></a>
            </div>
            <p className='footer-title' >Copyright ©2020 All rights reserved </p>
          </div>

        </div>
    </footer>
  )
}

export default Footer
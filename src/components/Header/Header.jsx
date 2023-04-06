import React from 'react'
import "./index.scss"

const Header = () => {
  return (
    <header>
      <div className="header container">
        <ul className="header__ul">
          <li className="header__ul__li"><a className="header__ul__li-item" href="#">Works</a></li>
          <li className="header__ul__li"><a className="header__ul__li-item" href="#">Blog</a></li>
          <li className="header__ul__li"><a className="header__ul__li-item" href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header

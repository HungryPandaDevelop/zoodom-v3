import CheckLogged from 'blocks/header/CheckLogged';
import Logo from 'blocks/header/Logo';
import MenuPopup from 'components/popup/MenuPopup';
import { useState, useEffect, useRef } from 'react';

import AuthInfo from 'blocks/header/AuthInfo';
import Nav from 'blocks/header/Nav';


import CallPopup from 'components/popup/CallPopup';


const Header = () => {


  const [mobMenuOn, setMobMenuOn] = useState(false);

  const onShowMenu = () => {
    // console.log('mobMenuOn', mobMenuOn)
    setMobMenuOn(!mobMenuOn);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }



  return (
    <>
      <div className="scroll-top-box" onClick={scrollTop}>
        <div className="scroll-top" ></div>
      </div>


      <MenuPopup
        mobMenuOn={mobMenuOn}
        onShowMenu={onShowMenu}
      />

      <CallPopup />
      <AuthInfo />
      <header >
        <div className="main-grid">
          <div className="vertical-align col-2 col-sm-5 col-xs-5">
            <Logo />
          </div>
          <div className="vertical-align col-6 hidden-sm hidden-xs">
            <Nav />
          </div>
          <div className="vertical-align col-4 col-sm-6 col-xs-4 cabinet-header-container">
            <CheckLogged
            />
          </div>
          <div className="vertical-align col-7 col-sm-1  hidden-md hidden-lg hidden-xl hidden-xxl">
            <div className="hamburger-btn" onClick={onShowMenu}></div>
          </div>

          <div className="header-line"></div>


        </div>

      </header>
    </>
  )
}

export default Header;

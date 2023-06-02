import CheckLogged from 'blocks/header/CheckLogged';
import Logo from 'blocks/header/Logo';
import MenuPopup from 'components/popup/MenuPopup';
import { useState, useEffect } from 'react';

import AuthInfo from 'blocks/header/AuthInfo';
import Nav from 'blocks/header/Nav';


import CallPopup from 'components/popup/CallPopup';


const Header = () => {

  const [mobMenuOn, setMobMenuOn] = useState(false);

  const onShowMenu = () => {
    console.log('mobMenuOn', mobMenuOn)
    setMobMenuOn(!mobMenuOn);
  };

  return (
    <>


      <MenuPopup
        mobMenuOn={mobMenuOn}
        onShowMenu={onShowMenu}
      />

      <CallPopup />
      <AuthInfo />
      <header >
        <div className="main-grid">
          <div className="vertical-align col-2 col-xs-5">
            <Logo />
          </div>
          <div className="vertical-align col-6 hidden-xs">
            <Nav />
          </div>
          <div className="vertical-align col-4 col-xs-4 cabinet-header-container">
            <CheckLogged
            />
          </div>
          <div className="vertical-align col-7 hidden-md hidden-sm hidden-lg hidden-xl hidden-xxl">
            <div className="hamburger-btn" onClick={onShowMenu}></div>
          </div>

          <div className="header-line"></div>


        </div>

      </header>
    </>
  )
}

export default Header;

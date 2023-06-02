import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import CabinetPopup from 'blocks/header/CabinetPopup';
import { Link } from 'react-router-dom';


import avatar from 'front-end/images/icons/paw-ico.svg';



const CabinetHeader = ({
  userInfo,
  ActionFn
}) => {

  const [cabinetPopupShow, setCabinetPopupShow] = useState(false);


  const ref = useRef(null);

  const handleClickOutside = (event) => {

    if ((ref.current && !ref.current.contains(event.target))) {
      setCabinetPopupShow(false);
    }
    if (event.key === 'Escape') { setCabinetPopupShow(false); }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleClickOutside, true);
    };
  }, []);





  const onCabinetPopupShow = () => {
    setCabinetPopupShow(!cabinetPopupShow);
  }

  return (

    <>

      <div className="sigin-body" ref={ref}>

        <div
          className={`cabinet-header-avatar-container ${cabinetPopupShow ? 'active' : ''}`}
          onClick={onCabinetPopupShow}

        >
          <i></i>
          <div
            className={`cabinet-header-avatar img-cover ${userInfo.imgsAccount ? '' : 'empty'}`}
            style={{ backgroundImage: `url(${userInfo.imgsAccount ? userInfo.imgsAccount : avatar})` }}
          >
          </div>
          <span className='cabinet-header-name'>{userInfo.accountName}</span>
        </div>
        <div className="btn-header-container">
          <Link to={`/cabinet/promo`} className="add-cards-btn">+ Добавить объявление</Link>
        </div>
        {cabinetPopupShow && <CabinetPopup
          userInfo={userInfo}
          ActionFn={ActionFn}
          onCabinetPopupShow={onCabinetPopupShow}

        />}
      </div>
    </>
  )
}


export default CabinetHeader;
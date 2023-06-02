import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { Link } from 'react-router-dom';

import addRoute from 'pages/goMap/js/addRoute';
import removeRoute from 'pages/goMap/js/removeRoute';

import { useEffect, useState } from 'react';

import { getSingleListing } from 'store/asyncActions/getSingleListing'
import SimpleDateTime from 'react-simple-timestamp-to-date';

import defaultCardsImg from 'front-end/images/icons/avatar-black.svg'
import BtnCall from 'pages/catalog/parts/cardsItem/BtnCall';


import phoneIco from 'front-end/images/icons/phone-black.svg'
import mainIco from 'front-end/images/icons/mail-black.svg'
import markerIco from 'front-end/images/icons/marker-black.svg'

// import ToggleBtn from 'pages/catalog/parts/cardsItem/ToggleBtn';



const CardsPopup = (
  {
    listingType,
    currentCardId,
    myMap,
    myMapRef,
    myRoute,
    setMyRoute,
    setRouteboxState,
    setCurrentCardId,
    myPosition,
    choiseMarkerPosition,
    routeboxState,
    navigate,
    uid,
    cabinetType,
    setMarkerPositionText,
    setChoiseMarkerPosition
  }) => {

  const [cardInfo, setCardInfo] = useState(null);

  const formatPhone = (value) => {
    return `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`
  }


  const onShowPopup = (id) => {
    // console.log('myMapRef', myMapRef.current)
    if (id && myMapRef.current) {
      getSingleListing('company', id).then(res => {
        setCardInfo(res);
        removeRoute(myMapRef, myRoute);
        console.log('res', res)
        // const coords = res.cards_coords.split('--');
        setMarkerPositionText(res.cards_coords[0])
        const ltd = Number(res.cards_coords[1]);
        const lng = Number(res.cards_coords[2]);
        setChoiseMarkerPosition([ltd, lng]);
        myMapRef.current.setCenter([ltd, lng], 15)
        setRouteboxState(true);
      });
    }
  }

  const closePopup = () => {
    setCardInfo(null);
    setRouteboxState(null);
    setCurrentCardId(null);
    removeRoute(myMapRef, myRoute);
    navigate('/pitomniki/map');
    // console.log('/catalog/' + listingType + '/map')
  }

  const showRoutebox = () => {
    // console.log('myPosition', myPosition)
    if (myPosition) {
      removeRoute(myMapRef, myRoute);
      addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, 'auto');
      console.log('map', myPosition, choiseMarkerPosition)
      // setRouteboxState(!routeboxState); // состояние плашки маршрту
      // setRouteFirst(); // построить маршрут
    }

  }



  useEffect(() => {

    onShowPopup(currentCardId);

  }, [currentCardId])




  const rednderCards = () => {

    const imgCards = cardInfo.cards_photos ? cardInfo.cards_photos[0].name : defaultCardsImg;

    return (
      <div
        className="gomap-popup-container"
      >
        <div className="gomap-popup shadow-container">
          <div className="gomap-popup-close filters-close-popup"
            onClick={closePopup}
          >
          </div>
          <div className="gomap-popup-roof">


          </div>
          <div className="cards-face-container" >
            <div
              className="cards-face img-cover"
              style={{ backgroundImage: `url(${imgCards})` }}
            >
            </div>

          </div>
          <div className="gomap-popup-info">
            <h3>Питомник: <Link to={`/pitomniki/${currentCardId}`}>{cardInfo.card_name}</Link></h3>
            <div className="gomap-popup-price">{cardInfo.salary_priceFrom}</div>
            <ul className="ln gomap-popup-list">
              {cardInfo.card_phone && (
                <li>
                  <img src={phoneIco} alt="" />
                  <a href={`tel:${cardInfo.card_phone}`}>
                    {formatPhone(cardInfo.card_phone)}
                  </a>
                </li>
              )}
              {cardInfo.card_mail && (
                <li>

                  <img src={mainIco} alt="" />
                  <a href={`mailto:${cardInfo.card_mail}`}>{cardInfo.card_mail}</a>
                </li>
              )}

              <li>
                <img src={markerIco} alt="" />


                <b>{cardInfo.cards_coords[0]}</b>

              </li>
            </ul>

          </div>
        </div>
        <div
          className="btn btn--white btn-show-map ico-in--right"
          onClick={showRoutebox}>
          <span>Маршрут</span><i></i>
        </div>
      </div >
    )
  }
  if (cardInfo) {
    return rednderCards();
  }
  else {
    return false;
  }

}

const mapStateToProps = (state) => {

  return {
    getInfo: state.popupMapInfoReducer
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(CardsPopup);
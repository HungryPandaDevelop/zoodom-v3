import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Meta from 'pages/parts/Meta';

import Breadcrumbs from 'pages/parts/Breadcrumbs';

import RaitingDetail from 'pages/catalog/parts/cardsDetail/RaitingDetail';

import PitomnikInfo from 'pages/catalog/parts/cardsDetail/Pitomnik/PitomnikInfo';

import CompanyInfo from 'pages/catalog/parts/cardsDetail/CompanyInfo';

import CardsGallery from 'pages/catalog/parts/cardsDetail/CardsGallery';

import ReservePitomnikBreed from 'pages/catalog/parts/cardsDetail/Pitomnik/ReservePitomnikBreed';

import PromosList from 'pages/catalog/parts/cardsDetail/Promos/PromosList';

import { specializationArr } from "pages/catalog/parts/cardsDetail/Pitomnik/specializationArr";

// import { choiseCurrentAnimal } from 'pages/catalog/parts/cardsDetail/currentAnimal';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

// import { currentNameCategory } from 'pages/catalog/parts/cardsDetail/Pitomnik/currentNameCategory';

import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';

import { setMetaPitomnik } from 'pages/catalog/parts/cardsDetail/Pitomnik/setMetaPitomnik';

const CardsDetail = ({ uid }) => {

  const params = useParams();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [nameCategory, setNameCategory] = useState([[], []]);

  const [openReserve, setOpenReserve] = useState(false);
  const [reservAnimal, setReservAnimal] = useState('');

  const [typePitomnik, setTypePitomnik] = useState([]);

  useEffect(() => {

    getSingleListing('company', params.elementId).then(res => {

      setListing(res);
      setLoading(false);

      setTypePitomnik(specializationArr(res.breeds_nurseries));


    });

  }, []);




  if (loading) {
    return <>Loading</>
  }

  return (
    <div className="cards-detail">
      <Meta
        title={setMetaPitomnik(listing, typePitomnik).title}
        description={setMetaPitomnik(listing, typePitomnik).description}
        keywords={setMetaPitomnik(listing, typePitomnik).keywords}
      />

      <div className="stub"></div>
      <Breadcrumbs
        detailTitle={listing.card_name}
      />
      <div className="content">
        <div className="main-full">
          <h1>Питомник {listing.card_name}</h1>
        </div>
        <div className="main-full">

          <div className="cards-detail-roof">
            <RaitingDetail
              idEl={params.elementId}
            />
          </div>
        </div>
        <div className="main-grid cards-main company-main">
          <div className="col-9 col-md-8 col-xs-12">

            <div className="cards-gallery company-gallery">
              <CardsGallery
                getImages={listing.cards_photos}
              />
            </div>

            <div className="cards-description-container">
              <PitomnikInfo
                listing={listing}
                setOpenReserve={setOpenReserve}
                setReservAnimal={setReservAnimal}
              />
            </div>

          </div>
          <div className="col-3 col-md-4 col-xs-12 ">
            <CompanyInfo
              listing={listing}
              typePitomnik={typePitomnik}
            />

          </div>

        </div>
        <ReservePitomnikBreed
          openReserve={openReserve}
          setOpenReserve={setOpenReserve}
          reservAnimal={reservAnimal}
        />
        <PromosList
          idEl={params.elementId}
        />
        <Reviews
          title={listing.card_name}
          elementId={params.elementId}
          nameCategory={'pitomnik'}
          titleCategory={['Питомнике', 'Питомник', 'Питомнике']}
        />

        <div className="stub"></div>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
  }
}


export default connect(mapStateToProps)(CardsDetail);


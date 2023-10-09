import React, { useState, useEffect } from 'react';
import { getSingleListing } from 'store/asyncActions/getSingleListing';
import { useParams } from 'react-router-dom';
import CardsGallery from 'pages/catalog/parts/cardsDetail/CardsGallery';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PromoInfo from 'pages/promo/parts/PromoInfo';
import stubImg from 'front-end/images/stub-img.svg';

import {
  OKShareButton,
  TelegramShareButton,
  VKShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  VKIcon

} from "react-share";

const PromosDetail = () => {

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);


  const params = useParams();

  useEffect(() => {

    getSingleListing('promo', params.elementId).then(res => {

      setListing(res);
      setLoading(false);

      console.log(res)

    });

  }, []);

  if (loading) {
    return 'Loading...'
  }

  let parents = null;
  if (listing.typePromo === 'knit') {
    if (listing.knitBreed) {
      parents = [listing.knitBreed];
    }
  } else {
    if (listing.ownBreedFather && listing.ownBreedMother) {
      parents = [listing.ownBreedFather, listing.ownBreedMother];
    }
  }


  let imgCards;
  if (listing.typePromo === 'knit') {
    imgCards = listing?.knitBreed?.photoParents ? listing.knitBreed.photoParents[0].name : stubImg;
  } else {
    imgCards = listing.promo_photos ? listing.promo_photos[0].name : stubImg;
  }

  return (
    <>
      <div className="cards-detail">
        {/* <Meta
          title={setMetaPitomnik(listing, typePitomnik).title}
          description={setMetaPitomnik(listing, typePitomnik).description}
          keywords={setMetaPitomnik(listing, typePitomnik).keywords}
        /> */}

        <div className="stub"></div>
        <Breadcrumbs
          detailTitle={listing.card_name}
        />
        <div className="content">
          <div className="main-full">
            <h1>Объявлениe {listing.card_name}</h1>
          </div>
          <div className="main-full">

            <div className="cards-detail-roof">
              {/* <RaitingDetail
              idEl={params.elementId}
            /> */}
            </div>
          </div>
          <div className="main-grid cards-main company-main">
            <div className="col-9 col-md-8 col-xs-12">


              {listing.typePromo !== 'knit' ? (
                listing.promo_photos && (
                  <div className="cards-gallery company-gallery">
                    <CardsGallery
                      getImages={listing.promo_photos}
                    />
                  </div>
                )
              ) : ''}



              <div className="cards-description-container">

                {parents && (
                  <div className="main-grid">
                    <div className="col-12">
                      <h2>Племенной фонд:</h2>
                    </div>
                    {parents.map((item, index) => {
                      const {
                        breed,
                        date_berth,
                        diplomi,
                        gender,
                        name,
                        otsutstvie_disiplazii,
                        otsutstvie_patelli,
                        sertifikat_porodi,
                        sertifikat_pochek,
                        sertifikat_PKdef,
                        sertifikat_hcm,
                        sertifikat_sma,
                        tituli,
                        ychastie_vistavki,
                        photoParents,
                        animal,
                        sertifikate
                      } = item;


                      // let currentAnimal = choiseCurrentAnimal(animal);


                      return (
                        <div key={index} className="pitomnik-breed-item col-6">
                          <div className="pitomnik-breed-item-roof">
                            <span className='pitomnik-breed-gender'>{gender}:</span>
                            <div className='pitomnik-breed-name'>
                              {name}
                            </div>
                            <div className='pitomnik-breed-type'>
                              <h3>
                                Порода:
                              </h3>
                              <span>{breed}</span>
                            </div>
                          </div>
                          <div className="pitomnik-breeds-gallery">
                            <CardsGallery getImages={photoParents} />
                          </div>
                          <ul className='ln pitomnik-breeds-info'>
                            {date_berth && (<li>
                              <h3>
                                Дата рождения
                              </h3>
                              <span>{date_berth}</span>
                            </li>)}
                            {diplomi && (<li>
                              <h3>
                                Дипломы
                              </h3>
                              <span>{diplomi}</span>
                            </li>)}

                            {otsutstvie_disiplazii && (<li>
                              <h3>
                                Сертификат на отсутствие дисплазии (HD)
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {otsutstvie_patelli && (<li>
                              <h3>
                                Сертификат на отсутствие пателлы (PL)
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {sertifikat_porodi && (<li>
                              <h3>
                                Сертификат породы
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {sertifikat_sma && (<li>
                              <h3>
                                Сертификат на отсутствие спинальной мышечной атрофии (SMA)
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {sertifikat_PKdef && (<li>
                              <h3>
                                Сертификат на отсутствие дифицита пируваткиназы (PKdef)
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {sertifikat_pochek && (<li>
                              <h3>
                                Сертификат на отсутствие поликистозы почек
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {sertifikat_pochek && (<li>
                              <h3>
                                Сертификат на отсутствие поликистозы почек
                              </h3>
                              <span>Есть</span>
                            </li>)}
                            {tituli && (<li>
                              <h3>
                                Титулы
                              </h3>
                              <span>{tituli}</span>
                            </li>)}
                            {ychastie_vistavki && (<li>
                              <h3>
                                Участие в выставках
                              </h3>
                              <span>{ychastie_vistavki}</span>
                            </li>)}
                            {ychastie_vistavki && (<li>
                              <h3>
                                Участие в выставках
                              </h3>
                              <span>{ychastie_vistavki}</span>
                            </li>)}
                            {sertifikate && (<li>
                              <h3>
                                Родословная
                              </h3>
                              <span>
                                <a target='_blank' href={sertifikate[0]} alt="ссылка">Ссылка</a>
                              </span>
                            </li>)}
                          </ul>

                        </div>
                      )
                    }
                    )}

                  </div>
                )
                }
              </div>
              {/* <div className="btn-container">
                          <div className="btn btn--blue" onClick={() => { setOpenReserve(true); setReservAnimal(currentAnimal); }}>
                            Заказать {currentAnimal}
                          </div>
                        </div> */}
            </div>
            <div className="col-3 col-md-4 col-xs-12 ">
              1111111111111
              <VKShareButton
                url={'htps://www.example.com'}
                quote={'Dummy text!'}
                hashtag="#muo"
              >
                <VKIcon size={32} round />
              </VKShareButton>
              111111111
              <PromoInfo
                listing={listing}
              />
            </div>

          </div >

          {/* <Reviews
            title={listing.card_name}
            elementId={params.elementId}
            nameCategory={'pitomnik'}
            titleCategory={['Питомнике', 'Питомник', 'Питомнике']}
          /> */}

          <div div className="stub" ></div >
        </div >
      </div >
      <div className="stub">
      </div>

    </>
  )
}

export default PromosDetail
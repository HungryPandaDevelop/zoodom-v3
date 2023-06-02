import { specializationArr } from "pages/catalog/parts/cardsDetail/Pitomnik/specializationArr";

import { useEffect, useState } from 'react';


const CompanyInfo = ({ listing }) => {

  const [typeBreedsPitomnik, setTypeBreedsPitomnik] = useState('');

  useEffect(() => {

    if (listing.binding.breeds_nurseries) {
      setTypeBreedsPitomnik(specializationArr(listing.binding.breeds_nurseries));
    }

  }, []);


  return (
    <>
      <div className="promo-info">
        <ul className="promo-info-list ln">
          {listing.binding && (
            <li>
              <h3>
                Питомник:
              </h3>
              <span>
                {listing.binding.label}
              </span>
            </li>
          )}

          {listing.binding.breeds_nurseries && (
            <li>
              <h3>
                Специализация питомника:
              </h3>
              <span>
                {listing.binding && typeBreedsPitomnik[0] + ' / ' + typeBreedsPitomnik[1]}
              </span>
            </li>
          )}

          {listing.gender && (
            <li>
              <h3>
                Пол:
              </h3>
              <span>
                {listing.gender && listing.gender}
              </span>
            </li>
          )}
          {listing.bearTest && (
            <li>
              <h3>
                BAER-test:
              </h3>
              <span>
                {listing.bearTest && listing.bearTest}
              </span>
            </li>
          )}
          {listing.privit && (
            <li>
              <h3>
                Привит:
              </h3>
              <span>
                {listing.privit && 'Да'}
              </span>
            </li>
          )}
          {listing.pomet && (
            <li>
              <h3>
                Помет:
              </h3>
              <span>
                {listing.pomet && listing.pomet}
              </span>
            </li>
          )}
          {listing.cleymenie && (
            <li>
              <h3>
                Клеймение:
              </h3>
              <span>
                {listing.cleymenie && 'Да'}
              </span>
            </li>
          )}
          {listing.chipirovanie && (
            <li>
              <h3>
                Чипирование:
              </h3>
              <span>
                {listing.chipirovanie && 'Да'}
              </span>
            </li>
          )}
        </ul>
        <div className="promo-info-footer">
          <div className="promo-price">

            {listing.typePromo === 'knit' ?
              listing.price_knit
              :
              listing.price_single
            } р.
          </div>
          <div className="btn-container">
            <a href="#" className="btn btn--blue">
              Забронировать
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyInfo

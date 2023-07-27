import { specializationArr } from "pages/catalog/parts/cardsDetail/Pitomnik/specializationArr";

import { useEffect, useState } from 'react';

import inst from 'front-end/images/social/instagram-white.svg'
import ok from 'front-end/images/social/ok-white.svg'
import ru from 'front-end/images/social/youtube-white.svg'
import tw from 'front-end/images/social/twitter-white.svg'
import vk from 'front-end/images/social/vk-white.svg'
import youtube from 'front-end/images/social/youtube-white.svg'
import facebook from 'front-end/images/social/facebook-white.svg'

import repostCat from 'front-end/images/social-repost-cat.svg'
import repostDog from 'front-end/images/social-repost-dog.svg'

const CompanyInfo = ({ listing }) => {

  const [typeBreedsPitomnik, setTypeBreedsPitomnik] = useState('');

  useEffect(() => {

    if (listing.binding.breeds_nurseries) {
      setTypeBreedsPitomnik(specializationArr(listing.binding.breeds_nurseries));
    }

  }, []);


  let ruTextPromo;

  if (listing.typePromo === 'sale') {
    ruTextPromo = 'Продажа';
  }
  if (listing.typePromo === 'anons') {
    ruTextPromo = 'Анонс помета';
  }
  if (listing.typePromo === 'knit') {
    ruTextPromo = 'Вязка';
  }
  if (listing.typePromo === 'gift') {
    ruTextPromo = 'В дар';
  }

  return (
    <>
      <div className="promo-info">
        <div className={`promo-item-type ${listing.typePromo}`}>{ruTextPromo}</div>
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
          {(listing.price_single || listing.price_group) && (
            <div className="promo-price">
              <b>Цена:</b>
              {listing.price_single ?
                listing.price_single && listing.price_single + ' р.' :
                listing.price_group && listing.price_group.from + ' - ' + listing.price_group.to + ' р.'
              }
            </div>
          )}

          <div className="btn-container">
            <a href="#" className="btn btn--blue">
              Забронировать
            </a>
          </div>

        </div>
        <div className="repost-social">
          <div className="repost-social-top">
            <div>
              {listing.binding.label.indexOf('Коты') > 0 ? <img src={repostCat} alt="" /> : <img src={repostDog} alt="" />}

            </div>
            <div className="repost-social-icons">
              Хочу репостики
              <div className='social'>
                <a href="/"><img src={inst} alt="inst" /></a>
                <a href="/"><img src={ok} alt="ok" /></a>
                <a href="/"><img src={ru} alt="rutube" /></a>
                <a href="/"><img src={tw} alt="tw" /></a>
                <a href="/"><img src={vk} alt="vk" /></a>
                <a href="/"><img src={youtube} alt="youtube" /></a>
                <a href="/"><img src={facebook} alt="facebook" /></a>

              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default CompanyInfo

import SpecializationPitomnik from 'pages/catalog/parts/cardsDetail/Pitomnik/SpecializationPitomnik';

import SocialContacts from 'pages/catalog/parts/cardsDetail/SocialContacts';

import { specializationArr } from "pages/catalog/parts/cardsDetail/Pitomnik/specializationArr";

const CompanyInfo = ({ listing, typePitomnik }) => {

  const formatPhone = (value) => {
    return `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`
  }


  return (
    <>
      <div className="cards-company-info">
        <div className="main-grid ">
          <div className="col-6">
            {listing.cards_logo && (<div className="сards-company-logo">
              <img src={listing.cards_logo[0]} alt="" />
            </div>)}

            <div className="cards-company-name"> {listing.card_name}</div>
          </div>
          {listing.breeds_nurseries && (
            <div className="col-6">
              <SpecializationPitomnik typePitomnik={typePitomnik} />
            </div>
          )}
          <ul className='cards-company-contacts ln col-12'>
            {listing.cards_coords && (
              <li>
                <h3>Адрес:</h3>
                <span>{listing.cards_coords[0]}</span>
              </li>
            )}

            {listing.card_phone && (<li>
              <h3>Телефон:</h3>
              <span><a href={`tel:${listing.card_phone}`}>{listing.card_phone}</a></span>
            </li>)}
            {listing.card_mail && (
              <li>
                <h3>E-mail:</h3>
                <span>{listing.card_mail}</span>
              </li>
            )}
            {listing.card_site && (
              <li>
                <h3>Сайт:</h3>
                <span>{listing.card_site}</span>
              </li>
            )}
            {listing.social && (
              <li className='cards-company-social'>
                <h3>Соц. сети:</h3>
                <SocialContacts listing={listing.social} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CompanyInfo

import SpecializationPitomnik from 'pages/catalog/parts/cardsDetail/Pitomnik/SpecializationPitomnik';

import SocialContacts from 'pages/catalog/parts/cardsDetail/SocialContacts';

const CompanyInfo = ({ listing, typePitomnik }) => {


  return (
    <>
      <div className="cards-company-info">
        <div className="main-grid ">
          <div className="col-6">
            {listing.cards_logo && (<div className="сards-company-logo">
              <img src={listing.cards_logo[0]} alt="" />
            </div>)}


          </div>

          <ul className='cards-company-contacts ln col-12'>
            {listing.card_name && (
              <li>
                <h3>Питомник:</h3>
                <span>{listing.card_name}</span>
              </li>
            )}

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
            {listing.breeds_nurseries && (
              <li>
                <SpecializationPitomnik typePitomnik={typePitomnik} />
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

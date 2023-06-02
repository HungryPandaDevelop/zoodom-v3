import stubImg from 'front-end/images/stub-img.svg';
import { Link } from 'react-router-dom';



const PromosItem = ({ listing }) => {


  let imgCards;
  // = listing.typePromo === 'knit' ?
  // listing.knitBreed.photoParents[0].name : listing.promo_photos ? listing.promo_photos[0].name : stubImg;
  if (listing.typePromo === 'knit') {
    imgCards = listing?.knitBreed?.photoParents ? listing.knitBreed.photoParents[0].name : stubImg;
  } else {
    imgCards = listing.promo_photos ? listing.promo_photos[0].name : stubImg;
  }
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
  // console.log(listing)
  return (
    <>
      <div className="cards-item promo-item">
        <div className="promo-item-roof">
          <b>Питомник: </b>
          <span>
            {listing.binding?.label}
          </span>
        </div>
        <div className={`promo-item-type ${listing.typePromo}`}>{ruTextPromo}</div>
        <Link className="cards-item-img" to={`/ads/${listing.id}`}>
          <div className="img-cover" style={{ backgroundImage: `url( ${imgCards} )` }}>
            <img src={imgCards} alt="" />
          </div>
        </Link>
        <div className="cards-item-info">
          <h3>
            <Link to={`/ads/${listing.id}`}>
              {listing.card_name}
            </Link>
          </h3>
        </div>
        <div className="promo-item-bottom">
          <div className="promo-item-price">
            {listing.typePromo === 'knit' ?
              listing.price_knit
              :
              listing.price_single
            } р.
          </div>
          <div className="promo-item-btn">
            <a href="#" className="btn btn--blue">Забронировать</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default PromosItem;

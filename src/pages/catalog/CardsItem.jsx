import stubImg from 'front-end/images/stub-img.svg';
import { Link } from 'react-router-dom';


import RewRatingItem from 'pages/catalog/parts/CardsRatingItem';

const CardsItem = ({ listing }) => {


  const imgCards = listing.cards_photos ? listing.cards_photos[0].name : stubImg;




  return (
    <>
      <div className="cards-item">
        <Link className="cards-item-img" to={`/pitomniki/${listing.id}`}>
          <div className="img-cover" style={{ backgroundImage: `url( ${imgCards} )` }}>
            <img src={imgCards} alt="" />
          </div>


          <RewRatingItem idEl={listing.id} />
        </Link>
        <div className="cards-item-info">
          <h3><Link to={`/pitomniki/${listing.id}`}>{listing.card_name}</Link></h3>
          {listing.cards_description_mini && (<div className="cards-item-text">{listing.cards_description_mini}</div>)}

          {listing.cards_coords && (
            <div className="cards-address"> <b>Адрес: </b><span>{listing.cards_coords[0]}</span></div>
          )}

        </div>
      </div>
    </>
  )
}

export default CardsItem;

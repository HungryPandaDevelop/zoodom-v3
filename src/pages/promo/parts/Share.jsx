import { useLocation } from "react-router-dom";

import repostCat from 'front-end/images/social-repost-cat.svg'
import repostDog from 'front-end/images/social-repost-dog.svg'

import {
  OKShareButton,
  TelegramShareButton,
  VKShareButton,
  OKIcon,
  TelegramIcon,
  VKIcon

} from "react-share";

const Share = ({ listing, type, typeBreeds }) => {

  const renderImg = () => {

    if (type) {
      console.log('t', type[0][0], type[0][0].indexOf('Коты'))
      return type[0][0].indexOf('Коты') > -1 ? <img src={repostCat} alt="" /> : <img src={repostDog} alt="" />
    }
    if (typeBreeds) {
      if (typeBreeds === 'sobak') {
        return <img src={repostDog} alt="" />;
      } else {
        return <img src={repostCat} alt="" />;
      }

    }
    //
  }

  const location = useLocation();
  // console.log("listing", listing)
  return (
    <div className="repost-social">
      <div className="repost-social-top">
        <div>
          {renderImg()}
        </div>
        <div className="repost-social-icons">
          Хочу репостики
          <div className='social'>
            <OKShareButton
              url={`http://zoonika.com` + location.pathname}
              title={listing.card_name}>
              <OKIcon size={32} round></OKIcon>
            </OKShareButton>
            <TelegramShareButton
              url={`http://zoonika.com` + location.pathname}
              title={listing.card_name}>
              <TelegramIcon size={32} round></TelegramIcon>
            </TelegramShareButton>
            <VKShareButton
              url={`http://zoonika.com` + location.pathname}
              title={listing.card_name}
            >
              <VKIcon size={32} round></VKIcon>
            </VKShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share

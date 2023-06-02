
import { useEffect } from "react"

import { Link, useParams } from 'react-router-dom';

import defaultCardsImg from 'front-end/images/cabinet/profile-black.svg'

const RoomItem = ({ room, uid, roomId, setCurrentInfoChat, onDelete, messageLength }) => {


  let imgCards;

  const params = useParams();

  useEffect(() => {


    if (params.roomUrl === room.id) {
      changeRoom(room);
    }



  }, [params.roomUrl]);

  const changeRoom = (room) => {

    if (room.accountInfo.uid === uid) {
      imgCards = room.listing.userInfo.imgsAccount ? room.listing.userInfo.imgsAccount : defaultCardsImg;
      setCurrentInfoChat([
        room.listing.userInfo.typeCabinet,
        room.listing.id,
        room.listing.card_name,
        room.listing.userInfo.accountName,
        imgCards

      ]
      );


    } else {
      imgCards = room.listing.userInfo.imgsAccount ? room.listing.userInfo.imgsAccount : defaultCardsImg;
      setCurrentInfoChat([
        room.accountInfo.typeCabinet,
        room.accountInfo.currentCard[0],
        room.accountInfo.currentCard[1],
        room.accountInfo.accountName,
        imgCards
      ]);

    }
  }


  return (
    <div

      className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
      <Link to={`/cabinet/chat/${room.id}`} className="chat-list-link"></Link>
      <div className="chat-list-img-wrap">

        {room.accountInfo.uid === uid ? (<div
          className="chat-list-img img-cover"
          style={{ backgroundImage: `url(${room.listing.userInfo.imgsAccount ? room.listing.userInfo.imgsAccount : defaultCardsImg})` }}
        >
        </div>) : (<div
          className="chat-list-img img-cover"
          style={{ backgroundImage: `url(${room.listing.userInfo.imgsAccount ? room.listing.userInfo.imgsAccount : defaultCardsImg})` }}
        >
        </div>)}


        {messageLength > 0 && <div className="new-message-warning"></div>}

      </div>

      <div className="chat-list-about">
        <div className="chat-list-cardsname">
          {
            room.accountInfo.uid === uid ?
              room.listing.card_name
              :
              room.accountInfo.currentCard[1]
          }
        </div>
        <div className="chat-list-accountname">
          {
            room.accountInfo.uid === uid ?
              room.listing.userInfo.accountName
              :
              room.accountInfo.accountName
          }
        </div>
        <div className="chat-list-cardssubname">
          на             {
            room.accountInfo.uid === uid ?
              room.accountInfo.currentCard[1]
              :
              room.listing.card_name
          }
        </div>
      </div>

      <Link to="/cabinet/chat/" className="table-btn table-btn--delete" onClick={onDelete}></Link>

    </div>
  )
}




export default RoomItem;


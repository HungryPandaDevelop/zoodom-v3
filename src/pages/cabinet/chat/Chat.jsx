
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import { sendMessage } from 'store/asyncActions/getMessageAsync';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { connect } from 'react-redux';
import RoomList from 'pages/cabinet/chat/RoomList';
import Messages from 'pages/cabinet/chat/Messages';
import ChatForm from 'pages/cabinet/chat/ChatForm';



const Chat = ({ uid }) => {


  const params = useParams();

  const [currentInfoChat, setCurrentInfoChat] = useState(null);


  const choiseChat = () => (<div className='choise-chat-container'>
    <div className="choise-chat-ico"></div>
    <div className="choise-chat-text">Выберете окно чата</div>
  </div>)

  return (

    <TemplateAccount title='Чат' addWrapClass='cabinet-account-chat'>
      {uid && (<div className="main-grid">
        <div className="col-3 chat-cell">
          <RoomList uid={uid} roomId={params.roomUrl} setCurrentInfoChat={setCurrentInfoChat} />
        </div>
        <div className="col-9 chat-cell">
          <div className="chat-messages">
            {currentInfoChat && (
              <div className="chat-messages-head">
                <Link to={`/catalog/${currentInfoChat[0]}/${currentInfoChat[1]}`}>
                  <div
                    className="chat-list-img img-cover"
                    style={{ backgroundImage: `url(${currentInfoChat[4]})` }}
                  >
                  </div>
                  <div className="chat-list-cardsname">{currentInfoChat[2]}</div>
                  <div className="chat-list-accountname">{currentInfoChat[3]}</div>
                </Link>
              </div>
            )}

            {(params.roomUrl) ? (<>
              <Messages uid={uid} roomId={params.roomUrl} />
              <ChatForm uid={uid} roomId={params.roomUrl} />
            </>) : choiseChat()}
          </div>
        </div>
      </div>)}

    </TemplateAccount >

  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps)(Chat);

// export default Chat;
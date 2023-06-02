import { Link } from 'react-router-dom';

import { getAuth } from 'firebase/auth';


const CabinetPopup = ({
  userInfo,
  onCabinetPopupShow,
  ActionFn
}) => {
  const auth = getAuth();

  const onLogOut = () => {
    auth.signOut();
    ActionFn('SET_RESET_ACCOUNT', {});
  };

  return (
    <div className="cabinet-popup">
      <div className="cabinet-popup-roof">
        <Link to={`/cabinet/${userInfo.typeCabinet}-new`} className="btn-header-cards btn-header"></Link>

      </div>
      <div className="cabinet-popup-info">
        <div className="cabinet-popup-name">{userInfo.accountName}</div>
        <div className="cabinet-popup-mail">{userInfo.email}</div>
      </div>
      <div className="cabinet-popup-controls">
        <Link
          to="/cabinet/"
          className="btn btn--blue-border"
          onClick={onCabinetPopupShow}
        >В кабинет</Link>
        <div onClick={onLogOut} className="btn btn--red-border">Выйти</div>
      </div>
    </div>
  )
}

export default CabinetPopup;

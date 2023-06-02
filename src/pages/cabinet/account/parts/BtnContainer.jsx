
import { Link } from 'react-router-dom';

const BtnContainer = () => {
  return (
    <>
      <div className="col-2"></div>
      <div className="col-10 btn-container">
        <Link to='/cabinet/account-edit/' className="btn btn-edit btn--blue ico-in ico-in--left">
          <i></i>
          <span>Редактировать профиль</span>
        </Link>
        <div className="btn btn-delete-profiled btn--blue-border ico-in ico-in--left">
          <i></i><span>Удалить профиль</span>
        </div>
      </div></>
  )
}

export default BtnContainer

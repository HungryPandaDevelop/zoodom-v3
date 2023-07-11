import { useState } from 'react';


// switch-btn--active
const RewFormFooter = ({ userInfo, statusName, setStatusName }) => {
  const [switchActive, setSwitchActive] = useState(false);



  const chagneSwitch = () => {
    setSwitchActive(!switchActive)
    setStatusName(!statusName)
  }

  return (
    <>
      <div className="col-12 account-item">
        <div className="title-rew-small">
          Вы оставляете отзыв как:
        </div>
        <h3 className="title-rew-name">
          {statusName ? <>{userInfo.name} {userInfo.family} {userInfo.secondName}</> : 'Аноним'}

        </h3>
      </div>
      <div className="col-6  col-md-12 col-sm-12 account-item rew-switch">
        <label><b>Скрыть мои данные в отзыве</b></label>
        <div className="switch-container" onClick={chagneSwitch}>
          <span></span>
          <div className={`switch-btn switch-btn--blue ${switchActive ? 'switch-btn--active' : ''}`}>
            <i></i>
          </div>
          <span></span>
        </div>
      </div>
    </>
  )
}





export default RewFormFooter;
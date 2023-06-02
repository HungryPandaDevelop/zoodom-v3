import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import CabinetHeader from 'blocks/header/CabinetHeader';
import NavNoLogged from 'blocks/header/NavNoLogged';

const CheckLogged = ({
  userInfo,
  checkingStatus,
  ActionFn
  // showPopup 
}) => {
  return (
    <div className="cabinet-header">
      {checkingStatus ? 'Loading...' : (userInfo.uid ?
        <CabinetHeader
          userInfo={userInfo}
          ActionFn={ActionFn}
        // showPopup={showPopup}
        /> :
        <NavNoLogged
        // showPopup={showPopup}
        />)}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    userInfo: state.accountInfo,
    checkingStatus: state.accountInfo.checkingStatus
  }
};

export default connect(mapStateToProps, {
  ActionFn
})(CheckLogged);
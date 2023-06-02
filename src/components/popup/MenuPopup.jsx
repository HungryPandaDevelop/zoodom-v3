// import logo from 'front-end/images/logo.svg';

// import vk from 'front-end/images/social/vk.svg';
// import inst from 'front-end/images/social/instagram.svg';
// import tw from 'front-end/images/social/twitter.svg';
import Logo from 'blocks/header/Logo';
import Nav from 'blocks/header/Nav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import ActionFn from 'store/actions';

const MenuPopup = ({
  mobMenuOn,
  onShowMenu,
  userInfo,
  checkingStatus,
  ActionFn
}) => {

  const auth = getAuth();
  const onLogOut = () => {
    auth.signOut();
    ActionFn('SET_RESET_ACCOUNT', {});
  };

  return (
    <>

      <div className={`popup element-show menu-hamburger ${mobMenuOn && 'show'}`} >
        <div className="popup-overlay"></div>
        <div className="popup-container">
          <Logo />
          <div className="close-btn close-btn_popup" onClick={onShowMenu}></div>
          <nav className="popup-nav" onClick={onShowMenu}>
            <Nav />
          </nav>
          <div className="btn-container">
            {checkingStatus ? 'Loading...' : userInfo.uid ? (
              <>
                <Link to="/cabinet" className='btn btn--black-border'>Кабинет</Link>
                <div onClick={onLogOut} className='btn btn--blue-border'>Выйти</div>

              </>
            ) : (
              <>
                <Link to="/authorization" className='btn btn--black-border' onClick={onShowMenu}>Войти</Link>
                <Link to="/registration" className='btn btn--blue-border' onClick={onShowMenu}>Регистрация</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    userInfo: state.accountInfo,
    checkingStatus: state.accountInfo.checkingStatus
  }
};

export default connect(mapStateToProps, { ActionFn })(MenuPopup);
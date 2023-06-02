import { connect } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import PhotoProfile from 'pages/cabinet/account/parts/PhotoProfile';


const CabinetSidebar = ({ userInfo }) => {

  const auth = getAuth();
  const onLogout = () => {
    auth.signOut();
  }

  const location = useLocation();

  const pathMathRoute = (route) => {

    // if (route === location.pathname) {
    if (location.pathname.indexOf(route) >= 0) {
      return true;
    }

  }


  // console.log('nurseries-new'.indexOf("nurseries"))

  let NameMass;

  if (!userInfo.accountName || userInfo.accountName.length === 0) {
    NameMass = [
      ['Изменить профиль', 'account', 'profile-nav'],
    ];
  } else {
    NameMass = [
      ['Мои компании', 'company', 'cards-nav'],
      ['Мои объявления', 'promo', 'cards-nav'],
      // ['Мои услуги', 'services', 'cards-nav'],
      // ['Мои специалисты', 'specialists', 'cards-nav'],
      // ['Избранное', 'liked', 'favorites-nav'],
      // ['Спрятанное', 'hidden', 'hidden-nav'],
      // ['Чат', 'chat', 'chat-nav'],
      // ['Видеочат', 'videochat', 'videochat-nav'],
    ];
  }



  return (
    <>


      <div className='cabinet-nav'>
        <div className="cabinet-nav-profile">
          <PhotoProfile userInfo={userInfo} />
          {(!userInfo.accountName || userInfo.accountName.length === 0) ? ('-/-') : (<>
            <h3>
              {userInfo.family}
              {userInfo.name && (<><br />{userInfo.name}</>)}
              {userInfo.secondName && (<><br />{userInfo.secondName}</>)}
            </h3>
          </>)}
          <div className='cabinet-nav-topic'>
            <Link to="/cabinet/account-edit">Изменить профиль</Link>
          </div>
        </div>
        <div className="middle-nav-cabinet">
          <ul className="ln ">
            {
              NameMass.map((item, index) => (
                <li key={index} >
                  <Link className={`${item[2]} ${pathMathRoute('/cabinet/' + item[1]) ? 'active' : ''}`} to={`/cabinet/${item[1]}`}>
                    <i></i>
                    <span>{item[0]}</span>
                  </Link>
                </li>
              )
              )}
          </ul>
        </div>

        <ul className='ln bottom-nav-cabinet'>
          <li onClick={onLogout}>
            <em className='cabinet-logout'>
              <i></i>
              <span>Выйти из аккаунта</span>
            </em>
          </li>
          <li>
            <em>Удалить аккаунт</em>
          </li>
        </ul>


      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {

    userInfo: state.accountInfo,
  }
}

export default connect(mapStateToProps)(CabinetSidebar);
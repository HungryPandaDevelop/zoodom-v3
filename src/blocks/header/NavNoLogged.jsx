import { Link, useLocation, } from 'react-router-dom';

const NavNoLogged = ({
  // showPopup
}) => {
  const location = useLocation();



  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div className="nav nav-nologged">
        <Link className={`btn btn--black-border ${pathMathRoute('/authorization') ? 'active' : ''}`} to="/authorization">Войти</Link>
        <Link className={`btn btn--blue-border ${pathMathRoute('/registration') ? 'active' : ''}`} to="/registration">Регистрация</Link>
      </div>
    </>
  )
}

export default NavNoLogged
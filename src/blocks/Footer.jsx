import imgLogo from 'front-end/images/Zoonika.comi.svg'
import vkw from 'front-end/images/social/vk-white.svg'
import vkor from 'front-end/images/social/vk-orange.svg'
import tlw from 'front-end/images/social/telegram-white.svg'
import tlor from 'front-end/images/social/telegram-orange.svg'
import wzw from 'front-end/images/social/whatsapp-white.svg'
import wzor from 'front-end/images/social/whatsapp-orange.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      {/* <div className="stub-footer"></div> */}
      <footer>
        <div className="main-grid">
          <div className="col-3 col-md-12">
            <div className="logo-container">
              <Link className="logo" to="/">
                <img src={imgLogo} alt={imgLogo} />
              </Link>
            </div>
          </div>

          <nav className="col-6 nav-footer">
            <li><Link to="/ads">Объявления</Link></li>
            <li><Link to="/pitomniki">Питомники</Link></li>
            <li><Link to="/porodi-sobak/">Породы Собак</Link></li>
            <li><Link to="/porodi-koshki/">Породы Кошек</Link></li>

          </nav>
          <div className="col-3 col-xs-12  footer-info">
            <div>Мы будем признательны за вашу помощь по улучшению функционала портала.<br /> <b>Ждем ваших предложений: </b> <br /><a href="mailto:help@zoonika.com">
              help@zoonika.com
            </a></div>
            <br />
            <div className="cooperation">
              <b>Заявка на сотрудничество:</b>
              <a href="mailto:info@zoonika.com">
                info@zoonika.com
              </a>
            </div>
          </div>

          <div className="col-12 footer-bottom footer-bottom-desk">
            <div className="copyright">
              © 2023 Зооника. Все права защищены.
            </div>
            <Link to="/rule-public">Правила публикации отзывов</Link>
            <Link to="/privacy-policy">Политика конфиденциальности</Link>
            <Link to="/usloviya">Условия использования </Link>
            <a target="_blank" href="https://www.style-you.ru/">
              Создание сайта Style You</a>
          </div>
          <div className="col-12 footer-bottom footer-bottom-mob">

            <Link to="/rule-public">Правила публикации отзывов</Link>
            <Link to="/privacy-policy">Политика конфиденциальности</Link>
            <Link to="/usloviya">Условия использования </Link>
            <a target="_blank" href="https://www.style-you.ru/">
              Создание сайта Style You</a>
            <div className="copyright">
              © 2023 Зооника. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
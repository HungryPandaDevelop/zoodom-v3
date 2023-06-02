import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <>
      <ul className="ln nav-header">
        {/* <li> <Link to="/catalog/salons">Салоны</Link></li> */}
        {/* <li> <Link to="/catalog/clinics">Клиники</Link></li> */}
        <li> <Link to="/ads"><i className="ico-menu-1"></i><span>Объявления</span></Link></li>
        <li> <Link to="/pitomniki"><i className="ico-menu-2"></i><span>Питомники</span></Link></li>
        <li><Link to="/porodi-sobak/"><i className="ico-menu-3"></i><span>Породы Собак</span></Link></li>
        <li><Link to="/porodi-koshki/"><i className="ico-menu-4"></i><span>Породы Кошек</span></Link></li>



      </ul>
      {/* <ul className="ln nav-header">
        <li> <Link to="/contacts/">Контакты</Link></li>
      </ul> */}
    </>
  )
}

export default Nav;


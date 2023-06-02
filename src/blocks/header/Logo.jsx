import { Link } from 'react-router-dom';
import imgLogo from 'front-end/images/Zoonika.comi.svg'
//zoonika-portal-o-givotnih.svg
const Logo = () => {
  return (
    <Link className="logo" to="/"><img src={imgLogo} alt="" /></Link>
  )
}
export default Logo;
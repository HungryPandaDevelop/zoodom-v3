import { Link, useLocation, useParams } from "react-router-dom";



const CatalogChange = () => {


  // const params = useParams();
  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  // const getCategoryName = params.catagoryName ? params.catagoryName : 'vacancies';


  return (
    <div className="main-full catalog-btn-box">
      <div className="catalog-btn-container">
        <Link className={`catalog-btn btn-map-filters ${(pathMathRoute('/pitomniki/map') ? 'active' : '')}`} to={`/pitomniki/map`}>Карта</Link>
        <Link className={`catalog-btn ${(pathMathRoute('/pitomniki') ? 'active' : '')}`} to={`/pitomniki`}>Список</Link>
      </div>
    </div>
  )
}

export default CatalogChange

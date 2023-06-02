import MapYandex from "pages/goMap/parts/MapYandex";


import CatalogChange from 'pages/catalog/parts/CatalogChange';
const GoMap = () => {
  return (
    <>
      <div className="stub"></div>
      <CatalogChange />
      <div className="content">
        <div className="gomap">
          <MapYandex />
        </div>
      </div>
    </>

  )
}

export default GoMap;

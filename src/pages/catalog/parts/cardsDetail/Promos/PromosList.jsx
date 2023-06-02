import { getListing } from 'store/asyncActions/getListing';
import { useEffect, useState } from 'react';
import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';
import PromosItem from 'pages/promo/PromosItem';


const Promos = ({ idEl }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  console.log('idEl', idEl)

  useEffect(() => {
    if (idEl) {
      getListing('promo', idEl, 'binding').then(res => {
        // console.log('res', res)
        setListings(res);
        setLoading(false);
      });
    } else {
      getListing('promo', false, false, 8).then(res => {
        setListings(res);
        setLoading(false);
      });
    }

  }, []);


  if (listings.length === 0) { return false; }

  return (
    <>


      <div className="main-full">
        <h2>
          Объявления
        </h2>
      </div>
      <div className="catalog-grid">
        {loading ? <div className='col-12'><PreloaderList /></div> : listings.length > 0 ? (
          <>

            {
              listings.map((item) => (
                <div key={item.id} className="col-3 col-sm-6 col-xs-12">
                  <PromosItem
                    listing={item}
                    key={item.id}
                    imgCompany={item.imgCompany}
                  />
                </div>
              ))}
          </>
        ) : (
          <div className="col-12">
            <EmptyList />
          </div>
        )}
      </div>

    </>
  )
}

export default Promos
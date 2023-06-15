import { useEffect, useState } from 'react';
import { getListing } from 'store/asyncActions/getListing';
import { Link } from 'react-router-dom';
import CardsItem from 'pages/catalog/CardsItem';

const HomeNurseries = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    getListing('company', false, false, 8).then(res => {

      console.log(res)
      setListings(res);
      setLoading(false);
    });

  }, []);


  return (
    <section>
      <div className="main-full head-section">
        <h2 className="title-section">
          Питомники</h2><Link className="back-link" to="/pitomniki">Все Питомники</Link>
      </div>
      <div className='catalog-grid'>
        {loading ? 'Loading' : listings &&
          listings.map((item) => (
            <div key={item.id} className="nurse-wrap-item col-3 col-lg-4 col-md-6 col-xs-12">
              <CardsItem
                listing={item}
                key={item.id}
              />
            </div>
          ))}
      </div></section>
  )
}

export default HomeNurseries

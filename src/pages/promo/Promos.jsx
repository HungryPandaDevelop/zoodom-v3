import { getListing } from 'store/asyncActions/getListing';
import { useEffect, useState } from 'react';
import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import EmptyList from 'pages/cabinet/parts/EmptyList';
import PromosItem from 'pages/promo/PromosItem';
import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import PromolSearch from 'pages/promo/parts/PromoSearch';


const Promos = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectSearch, setSelectSearch] = useState('Все');

  const [valueSelect, setValueSelect] = useState({ label: 'Все', value: 'all' });

  const [promoTypeSelect, setPromoTypeSelect] = useState({ label: 'Все', value: 'all' });

  const [breedChoise, setBreedChoise] = useState('Все');

  useEffect(() => {
    // item.binding.breeds_nurseries?
    getListing('promo').then(res => {
      let filterArrAnimal = [];
      let filterArrPromo = [];
      let filterArr = [];

      let allFilterArr = [];

      allFilterArr = res;

      if (valueSelect.value !== 'all') {

        allFilterArr.map(item => {
          let stopAddAnimal = 0;

          item.binding.breeds_nurseries.map(el => {
            if (el.animal === valueSelect.label && stopAddAnimal === 0) {
              stopAddAnimal++;
              filterArrAnimal.push(item)

            }
          });
        });
        allFilterArr = filterArrAnimal;
        // setListings(filterArrAnimal);
      } else {
        // setListings(res);
      }


      if (promoTypeSelect.value !== 'all') {

        allFilterArr = allFilterArr.filter(item => {
          return item.typePromo === promoTypeSelect.value;
        });

        // setListings(filterArrPromo);
      }
      else {
        // setListings(res);
      }

      if (breedChoise && breedChoise !== 'Все') {
        let stopAdd = 0;
        allFilterArr.map(item => {
          stopAdd = 0;
          item.binding.breeds_nurseries?.map((el) => {
            if (el.breed === selectSearch && stopAdd === 0) {
              stopAdd++;
              filterArr.push(item);
            }
          });
        });
        allFilterArr = filterArr;
      }


      setListings(allFilterArr);
      setLoading(false);


    });

  }, [breedChoise, valueSelect, promoTypeSelect]);

  return (
    <div>
      <div className="stub"></div>
      <Breadcrumbs
        titleCategory={'Объявления'}
        listingType={'Объявления'}
      />
      <div className="content">
        <PageTitle title='Объявления' />

        <PromolSearch
          setSelectSearch={setSelectSearch}
          selectSearch={selectSearch}
          breedChoise={breedChoise}
          setBreedChoise={setBreedChoise}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
          promoTypeSelect={promoTypeSelect}
          setPromoTypeSelect={setPromoTypeSelect}
        />

        <div className="catalog-grid">
          {loading ? <div className='col-12'><PreloaderList /></div> : listings.length > 0 ? (
            <>

              {
                listings.map((item) => (
                  <div key={item.id} className="col-3 col-xs-12">
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
        <div className="stub"></div>
      </div>

    </div>
  )
}

export default Promos
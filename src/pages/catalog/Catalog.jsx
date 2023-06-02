import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import Meta from 'pages/parts/Meta';

import { connect } from 'react-redux';

import CatalogChange from 'pages/catalog/parts/CatalogChange';

import { getListing } from 'store/asyncActions/getListing';

import { useParams } from 'react-router-dom';

import Pagination from 'pages/catalog/Pagination';

import PreloaderList from 'pages/cabinet/parts/PreloaderList';

import EmptyList from 'pages/cabinet/parts/EmptyList';

import AnimalSearch from 'pages/catalog/parts/cardsItem/AnimalSearch';

const Catalog = ({
  uid,
  accountInfo,

}) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectSearch, setSelectSearch] = useState('Выберите породу');

  const [breedChoise, setBreedChoise] = useState('Все');
  const [valueSelect, setValueSelect] = useState({ label: 'Все', value: 'all' });
  const params = useParams();


  useEffect(() => {

    getListing('company', 'nurseries', 'catalog').then(res => {
      let filterArrAnimal = [];
      let filterArr = [];

      let allFilterArr = [];

      allFilterArr = res;

      if (valueSelect.value !== 'all') {
        console.log('in select')
        allFilterArr.map(item => {
          let stopAddAnimal = 0;
          item.breeds_nurseries.map(el => {
            if (el.animal === valueSelect.label && stopAddAnimal === 0) {
              stopAddAnimal++;
              filterArrAnimal.push(item)

            }
          });
        });

        allFilterArr = filterArrAnimal;
      }
      console.log('breedChoise', breedChoise)
      if (breedChoise && breedChoise !== 'Все') {
        console.log('in search')
        let stopAdd = 0;
        allFilterArr.map(item => {
          stopAdd = 0;
          item.breeds_nurseries?.map((el) => {
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

  }, [breedChoise, valueSelect]);


  let titleCategory = 'Питомники';



  return (
    <>
      <div className="stub"></div>

      <Meta
        typeMeta='default'
        title='Все питомники на сервисе Зооника'
        description='Все питомники на сервисе Зооника'
        keywords='Все питомники на сервисе Зооника'

      />
      <Breadcrumbs titleCategory={titleCategory} listingType={params.catagoryName} />

      <CatalogChange
      />
      <div className="content">
        <div className="main-grid">
          <div className="col-6">
            <h1>{titleCategory}</h1>
          </div>
          <div className="col-6">
            <div className="btn-head-container">
              {/* <Link to="/cabinet/company-new" className="btn btn--blue">
                Добавить питомник
              </Link> */}
            </div>
          </div>
        </div>
        <AnimalSearch
          setSelectSearch={setSelectSearch}
          selectSearch={selectSearch}
          breedChoise={breedChoise}
          setBreedChoise={setBreedChoise}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
        />

        <div className="catalog-grid">
          {loading ? <div className='col-12'><PreloaderList /></div> : listings.length > 0 ? (
            <>

              <Pagination
                listings={listings}
                listingType={params.catagoryName}
                uid={uid}
                accountInfo={accountInfo}


              />
            </>
          ) : (
            <div className="col-12">
              <EmptyList />
            </div>
          )}
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {

  return {
    listingSearch: state.listingSearchReducer,
    uid: state.accountInfo.uid,
    accountInfo: state.accountInfo.info,


  }
}



export default connect(mapStateToProps)(Catalog);

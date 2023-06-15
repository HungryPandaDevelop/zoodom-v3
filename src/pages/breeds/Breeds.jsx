import { useState, useEffect } from 'react';
import BreedsItem from 'pages/breeds/breedsList/BreedsItem';
import Search from 'pages/breeds/breedsList/Search';
import SearchSelects from 'pages/breeds/breedsList/SearchSelects';
import { useParams, useLocation } from 'react-router-dom';
import axios from "axios";
import Breadcrumbs from 'pages/parts/Breadcrumbs';
import EmptyList from 'pages/cabinet/parts/EmptyList';
const Breeds = () => {

  const siteWp = 'https://zoo-base.sait.website/';

  const params = useParams();
  const location = useLocation();
  const paramsUrl = new URLSearchParams(location.search);
  let countLoad = 0;

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [getSerchVal, setGetSearchVal] = useState(paramsUrl.get("search") ? paramsUrl.get("search") : '');

  const [currentPage, setCurrentPage] = useState('');
  const [resetPage, setResetPage] = useState(false);

  const [searchValSelect, setSearchValSelect] = useState({
    keep: paramsUrl.get("keep") ? paramsUrl.get("keep") : '',
    purpose: paramsUrl.get("purpose") ? paramsUrl.get("purpose") : '',
    size: paramsUrl.get("size") ? paramsUrl.get("size") : '',
    country: paramsUrl.get("country") ? paramsUrl.get("country") : '',
  });

  const startSelect = {
    keep: paramsUrl.get("keep") ? paramsUrl.get("keep") : '',
    purpose: paramsUrl.get("purpose") ? paramsUrl.get("purpose") : '',
    size: paramsUrl.get("size") ? paramsUrl.get("size") : '',
    country: paramsUrl.get("country") ? paramsUrl.get("country") : '',
  };



  const [loadListFields, setLoadListFields] = useState([])
  const [loadingLoadListFields, setLoadingLoadListFields] = useState(true)



  let fullUrl = window.location.href.split('?')[0];



  useEffect(() => {
    // console.log('param', paramsUrl.get("keep"))
    // создание ссылки



    if (getSerchVal || searchValSelect.keep.length > 0 || searchValSelect.country.length > 0 || searchValSelect.size.length > 0 || searchValSelect.purpose.length > 0) {
      let setLink = '?';

      getSerchVal && (setLink = setLink + '&search=' + getSerchVal);
      searchValSelect.keep && (setLink = setLink + '&keep=' + searchValSelect.keep);
      searchValSelect.purpose && (setLink = setLink + '&purpose=' + searchValSelect.purpose);
      searchValSelect.size && (setLink = setLink + '&size=' + searchValSelect.size);
      searchValSelect.country && (setLink = setLink + '&country=' + searchValSelect.country);

      // console.log('tests', searchValSelect.country)

      window.history.pushState("data", "Title", fullUrl + setLink);
    }

    if (currentPage !== params.breedsCategory) {
      setCurrentPage(params.breedsCategory);
      window.history.pushState("data", "Title", fullUrl);
      setSearchValSelect({
        keep: '',
        purpose: '',
        size: '',
        country: '',
      });
      setResetPage(true)
    }

    axios.get(`${siteWp}/wp-json/breeds/list?category=${params.breedsCategory}&search=${getSerchVal}&country=${searchValSelect?.country}&keep=${searchValSelect?.keep}&purpose=${searchValSelect?.purpose}&size=${searchValSelect?.size}`).then(res => {
      setLoading(false);
      setListings(res.data);
    });
    axios.get(`${siteWp}/wp-json/fields/get`).then(res => {
      setLoadListFields(res.data);
      setLoadingLoadListFields(false);
    });

  }, [getSerchVal, searchValSelect, params.breedsCategory]);



  return (
    <div className='content'>
      <div className="stub"></div>
      <Breadcrumbs
      />
      <div className="main-full">
        {params.breedsCategory === 'koshki' ? (<h1>Все породы кошек по алфавиту</h1>) : (<h1>Все породы собак по алфавиту</h1>)}


      </div>
      <Search
        setGetSearchVal={setGetSearchVal}
        getSerchVal={getSerchVal}
        breedsCategory={params.breedsCategory}
      // startValue={urlObj.search}
      />

      {loadingLoadListFields ? (<div className="main-full">Loading...</div>) : (
        <SearchSelects
          fieldСountry={loadListFields.field_country.choices}
          fieldСountryCats={loadListFields.field_country_cats.choices}
          fieldKeep={loadListFields.field_keep.choices}
          fieldSize={loadListFields.field_size.choices}
          fieldPurpose={loadListFields.field_purpose.choices}
          searchValSelect={searchValSelect}
          setSearchValSelect={setSearchValSelect}
          startSelect={startSelect}
          breedsCategory={params.breedsCategory}
          resetPage={resetPage}
          countLoad={countLoad}
        />
      )}

      <div className="catalog-grid">

        {loading ? 'Loading...' : listings.length > 0 ? (
          <>
            {listings.map((item, index) => (
              <div className='col-3 col-lg-4 col-sm-6  col-xs-12' key={index}>
                <BreedsItem listing={item} />

              </div>))}
          </>
        ) : (<div className='col-12'><EmptyList /></div>)}
      </div>

      <div className="stub"></div>
    </div>
  )
}

export default Breeds

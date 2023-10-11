import { useState, useEffect } from 'react';
import BreedsItem from 'pages/breeds/breedsList/BreedsItem';
import Search from 'pages/breeds/breedsList/Search';
import SearchSelects from 'pages/breeds/breedsList/SearchSelects';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from "axios";
import Breadcrumbs from 'pages/parts/Breadcrumbs';
import EmptyList from 'pages/cabinet/parts/EmptyList';

import { firstLoadList, checkUrl } from 'pages/breeds/breedsList/allGenerateUrl';

const Breeds = () => {

  const siteWp = 'https://zoo-base.sait.website/';

  const params = useParams();


  const [searchParams, setSearchParams] = useSearchParams({ 'search': '', 'country': '', 'keep': '', 'purpose': '', 'size': '', 'linka': '' });


  const [listings, setListings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [loadListFields, setLoadListFields] = useState([]);

  const [loadingLoadListFields, setLoadingLoadListFields] = useState(true)

  const [paramsUrlGenerate, setParamsUrlGenerate] = useState('');


  useEffect(() => {

    let endUrl = `${siteWp}/wp-json/breeds/list?category=koshki`;

    let enterUrl = '';

    if (checkUrl(searchParams) > 0) {
      enterUrl = firstLoadList(searchParams)
    }
    else {
      enterUrl = paramsUrlGenerate
    }


    endUrl = endUrl + enterUrl;

    axios.get(endUrl).then(res => {
      setLoading(false);
      setListings(res.data);
    });

    axios.get(`${siteWp}/wp-json/fields/get`).then(res => {
      setLoadListFields(res.data);
      setLoadingLoadListFields(false);
    });

  }, [params.breedsCategory, searchParams]);



  return (
    <div className='content'>
      <div className="stub"></div>
      <Breadcrumbs
      />
      <div className="main-full">

        {params.breedsCategory === 'koshki' ? (<h1>Все породы кошек по алфавиту</h1>) : (<h1>Все породы собак по алфавиту</h1>)}


      </div>
      <Search
        breedsCategory={params.breedsCategory}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setParamsUrlGenerate={setParamsUrlGenerate}
      />

      {loadingLoadListFields ? (<div className="main-full">Loading...</div>) : (
        <SearchSelects
          loadListFields={loadListFields}
          breedsCategory={params.breedsCategory}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setParamsUrlGenerate={setParamsUrlGenerate}
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

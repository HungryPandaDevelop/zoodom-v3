import { useState, useEffect } from 'react';
import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import { Link } from 'react-router-dom';

import { inputLoadList } from 'pages/breeds/breedsList/allGenerateUrl';

const Search = ({
  breedsCategory,
  searchParams,
  setSearchParams,
  setParamsUrlGenerate }) => {

  const [searchVal, setSearchVal] = useState('');

  const [showPreloader, setShowPreloader] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  const [firstLoad, setFirstLoad] = useState(0);

  const checkEmty = (val) => {
    console.log(searchVal)
    if (val.length > 0) {
      setShowEmpty(true);
    } else {
      setShowEmpty(false);
    }
  }

  const onSearch = (e) => {

    setSearchVal(e.target.value);
    checkEmty(e.target.value);
  };

  useEffect(() => {

    if (searchParams.get('search').length > 0 && firstLoad === 0) {
      setFirstLoad(1);
      setSearchVal(searchParams.get('search'));
    }

    let searchId = setTimeout(() => {
      setShowPreloader(false)

      inputLoadList(searchParams, setSearchParams, setParamsUrlGenerate, searchVal, 'search');

    }, 1000);

    return () => {
      setShowPreloader(true);
      clearTimeout(searchId);
    }
  }, [searchVal])


  const onClearSearch = () => {
    setShowEmpty(false);
    setSearchVal('');
    setSearchParams('');
    setParamsUrlGenerate('');
  }

  return (
    <div className="main-full">
      <div className={`search-container input-animate-label`}>
        <input
          type="text"
          id="search"
          className={`input-search input-decorate ${searchVal.length > 0 ? 'input-empty' : ''}`}
          onChange={(e) => { onSearch(e) }}
          value={searchVal}

        />
        <label htmlFor="search">Быстрый поиск породы</label>

        {showPreloader ? <PreloaderList /> : showEmpty ?
          <Link to={`/porodi-${breedsCategory}`} className="ico-empty-search"
            onClick={onClearSearch}
          >
          </Link>
          :
          <i className="search-ico"></i>}

        <div className="input-search-hint">
          {breedsCategory === 'sobak' ? (<div>Более 400 пород собак с подробным описанием и характеристиками</div>) : (<div>Более 60 пород кошек с подробным описанием и характеристиками</div>)}

        </div>
      </div>

    </div>
  )
}

export default Search

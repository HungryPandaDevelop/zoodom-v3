import { useState, useEffect } from 'react';
import PreloaderList from 'pages/cabinet/parts/PreloaderList';
import { Link } from 'react-router-dom';

const Search = ({ setGetSearchVal, getSerchVal, breedsCategory }) => {

  // const [searchVal, setSearchVal] = useState('');

  const [showPreloader, setShowPreloader] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  const checkEmty = () => {
    if (getSerchVal.length > 0) {
      setShowEmpty(true);
    } else {
      setShowEmpty(false);
    }
  }

  const onSearch = (e) => {
    checkEmty();
    setGetSearchVal(e.target.value)
    // setGetSearchVal(e.target.value)
  }

  const onClearSearch = () => {
    setGetSearchVal('');

  }


  useEffect(() => {

    setShowPreloader(true);
    let idStartSearch = setTimeout(() => {

      setShowPreloader(false)
      setGetSearchVal(getSerchVal);

      checkEmty();

    }, 1500);
    // setSearchVal(startValue)
    return (() => {
      clearTimeout(idStartSearch);
    })
  }, [getSerchVal]);

  return (
    <div className="main-full">
      <div className={`search-container input-animate-label`}>
        <input
          type="text"
          id="search"
          className={`input-search input-decorate ${getSerchVal.length > 0 ? 'input-empty' : ''}`}
          onChange={(e) => { onSearch(e) }}
          value={getSerchVal}

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

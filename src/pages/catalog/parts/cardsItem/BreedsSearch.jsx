import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const BreedsSearch = ({
  selectSearch,
  setSelectSearch,
  setValueSelect,
  valueSelect,
  breedChoise,
  setBreedChoise
}) => {



  const [breedList, setBreedList] = useState([]);
  const [newListSelect, setNewListSelect] = useState([]);

  const [loading, setLoading] = useState(true);


  const [сhoiseNameFiltering, setСhoiseNameFiltering] = useState('');

  const [searchPopupState, setSearchPopupState] = useState(false);


  const wrapperRef = useRef(null);
  const inputRef = useRef(null);


  const fullUrl = window.location.href.split('?')[0];

  useEffect(() => {


    setLoading(true);


    const siteWp = 'https://zoo-base.sait.website/';

    axios.get(`${siteWp}/wp-json/breeds/list?category=${valueSelect.value}`).then(res => {


      let newList = [{ name: 'Все', label: 'all' }];

      res.data.map(item => {
        newList.push({ name: item.title })
      });

      setBreedList(newList);
      setNewListSelect(newList);

      setLoading(false);

      const hideByBodyClick = (e) => {
        if (e.target.className !== 'custom-select' && e.target.className !== 'custom-select-name' && e.target.className !== 'input-decorate') {
          setSearchPopupState(false)
        };
      };
      const hideByBodyByKey = (e) => {
        if (e.key === 'Escape') { setSearchPopupState(false); }
      };
      document.addEventListener('keydown', hideByBodyByKey);
      document.body.addEventListener('click', hideByBodyClick);
      return () => {
        document.body.removeEventListener('click', hideByBodyByKey)
        document.body.removeEventListener('keydown', hideByBodyClick)
      };
    });

    // if (breedChoise) {
    //   console.log('in')
    //   let setLink = '?';
    //   setBreedChoise(valueSelect.value);
    //   setLink = setLink + '&animal=' + valueSelect.value + '&breeds=' + selectSearch;
    //   window.history.pushState("data", "Title", fullUrl + setLink);

    // }
  }, [valueSelect, selectSearch]);



  const clearSearch = () => {
    setBreedChoise(false);

    setSelectSearch('Выберите породу');
    window.history.pushState("data", "Title", fullUrl);
  }

  const renderList = (list) => {

    return (list.length > 0) ? list.map((item, index) => (
      <div
        key={index}
        onClick={choiseSelect}
        className='search-list-item'
      >
        {item.name}</div>
    )) : (<li>Список пуст</li>);
  }

  const choiseSelect = (e) => {
    setSelectSearch(e.currentTarget.innerText);
    setСhoiseNameFiltering('');

    setBreedList(newListSelect);

    setSearchPopupState(false);

    setBreedChoise(e.currentTarget.innerText);

  }

  const onSearch = (e) => {

    setСhoiseNameFiltering(e.target.value);

    const dataSearch = newListSelect.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setBreedList(dataSearch)

  }


  return (
    <div className='search-field-input'>
      <label><b>Породы</b></label>
      <div className={`custom-select ${searchPopupState ? 'active' : ''}`}>

        <div
          className="custom-select-name"
          onClick={() => { setSearchPopupState(true) }}
        >{selectSearch}
        </div>
        <i></i>

        {searchPopupState && (
          <ul
            className="ln search-field-popup"
            ref={wrapperRef}
          >
            <div className="search-field-select">
              {breedChoise ? (<i onClick={clearSearch} className="ico-empty-search"></i>) : <i className="search-ico"></i>}

              <input
                ref={inputRef}
                type="text"
                value={сhoiseNameFiltering}
                className="input-decorate"
                onChange={onSearch}
                placeholder="Введите название породы"
              />
            </div>

            <div className="search-list">
              {loading === true ? 'loading...' : renderList(breedList)}
            </div>
          </ul>
        )}
      </div>
    </div>
  )
}

export default BreedsSearch;
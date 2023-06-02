import AnimalSelect from 'pages/catalog/parts/cardsItem/AnimalSelect';
import BreedsSearch from 'pages/catalog/parts/cardsItem/BreedsSearch';

import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const AnimalSearch = ({
  selectSearch,
  setSelectSearch,
  breedChoise,
  setBreedChoise,
  valueSelect,
  setValueSelect
}) => {


  const location = useLocation();
  const paramsUrl = new URLSearchParams(location.search);


  // const [сhoiseName, setСhoiseName] = useState('Выберете породу');

  const options = [
    { label: 'Все', value: 'all' },
    { label: 'Собаки', value: 'sobak' },
    { label: 'Коты', value: 'koshki' },
  ];


  // useEffect(() => {

  //   if (paramsUrl.get("animal")) {
  //     let filterVal = options.filter(item => item.value === paramsUrl.get("animal"))
  //     setValueSelect(filterVal[0]);
  //   }
  //   if (paramsUrl.get("breeds")) {
  //     // setСhoiseName(paramsUrl.get("breeds"));
  //     setSelectSearch(paramsUrl.get("breeds"))
  //   }



  // }, [])


  return (
    <>
      <div className="main-grid search-selects">
        <div className="col-3 col-xs-12">
          <AnimalSelect
            valueSelect={valueSelect}
            setValueSelect={setValueSelect}
            // setСhoiseName={setСhoiseName}
            setSelectSearch={setSelectSearch}
            setBreedChoise={setBreedChoise}
            options={options}
          />
        </div>
        <div className="col-9 col-xs-12">
          <BreedsSearch
            selectSearch={selectSearch}
            setSelectSearch={setSelectSearch}
            valueSelect={valueSelect}
            breedChoise={breedChoise}
            setBreedChoise={setBreedChoise}
          // сhoiseName={сhoiseName}
          // setСhoiseName={setСhoiseName}
          />
        </div>
      </div>

    </>
  )
};

export default AnimalSearch;
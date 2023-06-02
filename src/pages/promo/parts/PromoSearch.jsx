import AnimalSelect from 'pages/catalog/parts/cardsItem/AnimalSelect';
import BreedsSearch from 'pages/catalog/parts/cardsItem/BreedsSearch';
import PromoTypeSelect from 'pages/promo/parts/PromoTypeSelect';

import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const PromoSearch = ({
  selectSearch,
  setSelectSearch,
  breedChoise,
  setBreedChoise,
  valueSelect,
  setValueSelect,
  promoTypeSelect,
  setPromoTypeSelect
}) => {


  const location = useLocation();
  const paramsUrl = new URLSearchParams(location.search);


  // const [сhoiseName, setСhoiseName] = useState('Выберете породу');

  const options = [
    { label: 'Все', value: 'all' },
    { label: 'Собаки', value: 'sobak' },
    { label: 'Коты', value: 'koshki' },
  ];
  const optionsType = [
    { label: 'Все', value: 'all' },
    { label: "Продажа", value: "sale" },
    { label: "Анонс помета", value: "anons" },
    { label: "Вязка", value: "knit" },
    { label: "В дар", value: "gift" },
  ];
  useEffect(() => {

    if (paramsUrl.get("animal")) {
      let filterVal = options.filter(item => item.value === paramsUrl.get("animal"))
      setValueSelect(filterVal[0]);
    }
    if (paramsUrl.get("breeds")) {
      // setСhoiseName(paramsUrl.get("breeds"));
      setSelectSearch(paramsUrl.get("breeds"))
    }



  }, [])


  return (
    <>
      <div className="main-grid search-selects">
        <div className="col-3 col-xs-12">
          <AnimalSelect
            valueSelect={valueSelect}
            setValueSelect={setValueSelect}
            setSelectSearch={setSelectSearch}
            setBreedChoise={setBreedChoise}
            options={options}
          />
        </div>
        <div className="col-6 col-xs-12">
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
        <div className="col-3 col-xs-12">
          <PromoTypeSelect
            valueSelect={promoTypeSelect}
            setValueSelect={setPromoTypeSelect}
            setBreedChoise={setBreedChoise}
            options={optionsType}
          />
        </div>

      </div>

    </>
  )
};

export default PromoSearch;
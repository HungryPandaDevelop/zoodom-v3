import SingleSelect from 'pages/breeds/breedsList/SingleSelect';

const SearchSelects = ({
  fieldPurpose,
  fieldSize,
  fieldKeep,
  fieldСountry,
  fieldСountryCats,
  searchValSelect,
  setSearchValSelect,
  startSelect,
  breedsCategory
}) => {

  // console.log(fieldPurpose)

  return (
    <div className='main-grid search-selects'>

      {breedsCategory !== 'koshki' && (
        <SingleSelect
          topic='Назначение'
          options={fieldPurpose}
          idSelect='purpose'
          className='col-3 col-xs-12'
          searchValSelect={searchValSelect}
          setSearchValSelect={setSearchValSelect}
          startName={startSelect.purpose}
        />)}

      <SingleSelect
        topic='Размер'
        options={fieldSize}
        idSelect='size'
        className={breedsCategory === 'koshki' ? 'col-6 col-xs-12' : 'col-3 col-xs-12'}
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
        startName={startSelect.size}
      />
      {breedsCategory !== 'koshki' && (
        <SingleSelect
          topic='Содержание'
          options={fieldKeep}
          idSelect='keep'
          className='col-3 col-xs-12'
          searchValSelect={searchValSelect}
          setSearchValSelect={setSearchValSelect}
          startName={startSelect.keep}
        />
      )}

      <SingleSelect
        topic='Страна'
        options={breedsCategory === 'koshki' ? fieldСountryCats : fieldСountry}
        className={breedsCategory === 'koshki' ? 'col-6 col-xs-12' : 'col-3 col-xs-12'}
        idSelect='country'
        searchValSelect={searchValSelect}
        setSearchValSelect={setSearchValSelect}
        startName={startSelect.country}

      />
    </div>
  )
}

export default SearchSelects;

import SingleSelect from 'pages/breeds/breedsList/SingleSelect';

const SearchSelects = ({
  loadListFields,
  breedsCategory,
  searchParams,
  setSearchParams,
  setParamsUrlGenerate
}) => {


  return (
    <div className='main-grid search-selects'>

      {breedsCategory !== 'koshki' && (
        <SingleSelect
          topic='Назначение'
          options={loadListFields.field_purpose.choices}
          idSelect='purpose'
          className='col-3 col-xs-12'
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setParamsUrlGenerate={setParamsUrlGenerate}
        />)}
      {breedsCategory === 'koshki' ? (
        <SingleSelect
          topic='Линька'
          options={loadListFields.field_linka.choices}
          idSelect='linka'
          className={breedsCategory === 'koshki' ? 'col-6 col-xs-12' : 'col-3 col-xs-12'}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setParamsUrlGenerate={setParamsUrlGenerate}

        />) : (<SingleSelect
          topic='Размер'
          options={loadListFields.field_size.choices}
          idSelect='size'
          className={breedsCategory === 'koshki' ? 'col-6 col-xs-12' : 'col-3 col-xs-12'}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setParamsUrlGenerate={setParamsUrlGenerate}

        />)}
      {breedsCategory !== 'koshki' && (
        <SingleSelect
          topic='Содержание'
          options={loadListFields.field_keep.choices}
          idSelect='keep'
          className='col-3 col-xs-12'
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setParamsUrlGenerate={setParamsUrlGenerate}
        />
      )}

      <SingleSelect
        topic='Страна'
        options={breedsCategory === 'koshki' ? loadListFields.field_country_cats.choices : loadListFields.field_country.choices}
        className={breedsCategory === 'koshki' ? 'col-6 col-xs-12' : 'col-3 col-xs-12'}
        idSelect='country'
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setParamsUrlGenerate={setParamsUrlGenerate}

      />
    </div>
  )
}

export default SearchSelects;

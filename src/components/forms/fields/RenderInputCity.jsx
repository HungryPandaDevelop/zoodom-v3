import { Field } from 'redux-form';
import { useState, useEffect, useRef } from 'react';


import { connect } from 'react-redux';

const TempateInputCity = (props) => {

  const {
    input,
    placeholder,
    label,
    labelSecond,
    num,
    className,
    russianCities
  } = props;

  const [сhoiseName, setСhoiseName] = useState('Выбрать город');
  const [сhoiseNameFiltering, setСhoiseNameFiltering] = useState('');
  const [russianCitiesList, setRussianCities] = useState(russianCities);
  const [cityPopupState, setCityPopupState] = useState(false);


  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {

    setRussianCities(russianCities);

    if (input.value) {

      setСhoiseName(input.value);

    };

    const hideByBodyClick = (e) => {
      if (e.target.className !== 'custom-select' && e.target.className !== 'custom-select-name') {
        setCityPopupState(false)
      }

    };
    const hideByBodyByKey = (e) => {
      if (e.key === 'Escape') { setCityPopupState(false); }
    };
    document.addEventListener('keydown', hideByBodyByKey);
    document.body.addEventListener('click', hideByBodyClick);
    return () => {
      document.body.removeEventListener('click', hideByBodyByKey)
      document.body.removeEventListener('keydown', hideByBodyClick)
    };


  }, [input.value]);

  const choiseCity = (e) => {
    setСhoiseName(e.currentTarget.getAttribute('namecity'));
    setСhoiseNameFiltering('');
    setRussianCities(russianCities);


    setCityPopupState(false);

    input.onChange(e.currentTarget.getAttribute('namecity'));
  }
  const onClearSearch = (e) => {
    setСhoiseNameFiltering('');
    setRussianCities(russianCities);
  }
  const onSearchCity = (e) => {

    setСhoiseNameFiltering(e.target.value);

    const dataSearch = russianCities.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setRussianCities(dataSearch)

  }

  const renderCityList = (russianCitiesListParam) => {

    return (russianCitiesListParam.length > 0) ? russianCitiesListParam.map((item, index) => (
      <div
        key={index}
        coords={[item.coords.lat, item.coords.lon]}
        namecity={item.name}
        onClick={choiseCity}
        className='search-list-item'

      >
        {item.name}</div>
    )) : (<li>Список пуст</li>);
  }

  return (
    <div className={className}>
      <div className='search-field-input'>


        <input
          {...input}
          type="hidden"
          placeholder={placeholder}
          className={`input-decorate  ${input.value.length > 0 ? 'input-empty' : ''} `}

        />
        {label && <label><b>{num}. {label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
        <div className={`custom-select ${cityPopupState ? 'active' : ''}`}>

          <span className='custom-select-name'
            onClick={() => { setCityPopupState(!cityPopupState) }}
          >
            {сhoiseName}
          </span>
          <i></i>


          {cityPopupState && (
            <ul
              className="ln search-field-popup"
              ref={wrapperRef}
            >
              {/* <div className="filters-close-popup" onClick={() => { setCityPopupState(false) }}></div> */}
              <div className="search-field-select">
                <i onClick={onClearSearch}></i>
                <input
                  ref={inputRef}
                  type="text"
                  value={сhoiseNameFiltering}
                  className="search-input input-decorate"
                  onChange={onSearchCity}
                  // onBlur={() => setCityPopupState(false)}
                  placeholder="Введите название города"
                // onFocus={(event) => { setCityPopupState(true); event.target.select() }}
                />
              </div>

              <div className="search-list">
                {renderCityList(russianCitiesList)}
              </div>
            </ul>
          )}
        </div>
      </div>
    </div>


  );
}



const RenderInputCity = ({ name, placeholder, label, className, num, russianCities }) => {

  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    className={className}
    component={TempateInputCity}
    num={num}
    russianCities={russianCities}
  />;
}

const mapStateToProps = (state) => {

  return {
    russianCities: state.russianCities
  }
}

export default connect(mapStateToProps)(RenderInputCity);
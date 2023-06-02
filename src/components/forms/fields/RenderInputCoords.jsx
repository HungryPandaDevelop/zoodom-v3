import { Field } from 'redux-form';
import { useEffect, useState, useRef } from 'react';

const TemplateCoords = (props) => {

  const {
    input,
    label,
    labelSecond,
    num,
    className
  } = props;

  const elRef = useRef();

  const [custVal, setCustVal] = useState('');
  const [loadVal, setLoadVal] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {

    // const getClearAddress = input.value.split('--');
    setLoadVal(input.value[0]);
    setCustVal(input.value);
    if (firstLoad === 0) {
      setFirstLoad(1);
      const { ymaps } = window;
      const suggest = new ymaps.SuggestView('coords-ya');

      suggest.events.add('select', (e) => {
        const val = String(e.get('item').value.trim());
        const myGeocoder = ymaps.geocode(val);

        myGeocoder
          .then(res => {
            // elRef.classList.add('dark');
            const currentValue = [val, res.geoObjects.get(0).geometry._coordinates[0], res.geoObjects.get(0).geometry._coordinates[1]]

            setCustVal(currentValue);
            input.onChange(currentValue);

          });
      });
    }


  }, [input.value]);

  const checkEpmty = (e) => {

    if (e.target.value.length === 0) {

      setCustVal('');
      input.onChange('');
    }
  }


  return (
    <div className={className}>
      <div className='map-input'>
        {num && <i className="num-offset">{num}</i>}

        <input

          id='coords-ya'
          type="text"
          defaultValue={loadVal}
          className={`input-decorate  ${custVal.length > 0 ? 'input-empty' : ''}`}
          onChange={checkEpmty}
          ref={elRef}

        />
        {label && <label htmlFor='coords-ya' className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}
        {/* путышка для отправки */}
        <input
          type="text"
          {...input}
          value={custVal}
          className={`hidden-field`}
          autoComplete="off"
        />


      </div>
    </div>

  )
}
const RenderInputCoords = (props) => {


  return <>

    <Field
      name={props.name}
      props={props}
      component={TemplateCoords}
    />
  </>
}


export default RenderInputCoords;
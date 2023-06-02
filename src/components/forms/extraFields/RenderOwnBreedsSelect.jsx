import { connect } from 'react-redux';
import { useEffect, useState } from 'react'

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { Field } from 'redux-form';


const Template = ({
  input,
  label,
  num,
  labelSecond,
  className,
  inputChangeBreeds,
  filter
}) => {


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkEmpty, setCheckEmpty] = useState(true);
  const [checkEmptyText, setCheckEmptyText] = useState('Выбрать питомник');
  const [active, setActive] = useState(null);

  useEffect(() => {

    let isMounted = true;
    if (inputChangeBreeds) {

      getSingleListing('company', inputChangeBreeds).then(res => {
        if (isMounted) {
          let nuwOprions = [];

          if (res.breeds_nurseries) {
            res.breeds_nurseries.map(item => {
              if (filter) {
                if (item.gender === filter) {
                  nuwOprions.push(item);
                }
              } else {
                nuwOprions.push(item);
              }

            });
          }
          if (nuwOprions.length > 0) {
            setCheckEmpty(false);
          } else {
            setCheckEmpty(true);
            setCheckEmptyText('Список животных пуст')
          }
          setListings(nuwOprions);


          setLoading(false);
          setActive(input.value);
        };
      });
    } else {
      setCheckEmpty(true);
    }

    // console.log('inputChangeBreeds', inputChangeBreeds)
    return () => { isMounted = false };

  }, [inputChangeBreeds, input]);


  const changeVal = (item) => {
    setActive(item);
    input.onChange(item);
  }



  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}

      <ul className='breeds-radio ln col-12'>
        {listings.map((item, index) => (
          <li
            onClick={() => { changeVal(item) }}
            key={index}
            className={`${active?.name == item.name && "active"}`}
          >
            {console.log(item)}
            {item.photoParents && (<img src={item.photoParents[0].name} alt="" />)}
            <div>{item.name}</div>

          </li>))}
      </ul>
      {checkEmpty && (<div className="input-cabinet-text">{checkEmptyText}</div>)}
    </div>
  )
}

const RenderOwnBreedsSelect = ({
  name,
  label,
  labelSecond,
  num,
  inputChangeBreeds,
  className,
  filter,
  inputValueConnect,
  hideByClickId,

}) => {

  if (hideByClickId && !inputValueConnect) { return false }
  else if (inputValueConnect.length > 0 && hideByClickId.indexOf(inputValueConnect) === -1) {
    return false;
  }

  return (
    <Field
      name={name}
      label={label}
      labelSecond={labelSecond}
      component={Template}
      num={num}
      className={className}
      inputChangeBreeds={inputChangeBreeds}
      filter={filter}
    />
  );


}


const mapStateToProps = (state) => {

  return {
    accountInfo: state.accountInfo,
    inputChangeBreeds: state.inputConnectState.inputChangeBreeds,
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}


export default connect(mapStateToProps)(RenderOwnBreedsSelect);

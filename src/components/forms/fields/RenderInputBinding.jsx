
import { useEffect, useState } from 'react'
import ActionFn from 'store/actions';
import { getListing } from 'store/asyncActions/getListing';

import { connect } from 'react-redux';


import { Field } from 'redux-form';



const Template = ({
  name,
  label,
  labelSecond,
  options,
  input,
  num,
  className,
  ActionFn }) => {

  const [active, setActive] = useState(null);

  useEffect(() => {

    if (input.value) {
      // console.log('va', input.value)
      setActive(input.value);
      ActionFn('CHANGE_BREEDS', { inputChangeBreeds: input.value.value });
    }
  }, [input]);

  const changeVal = (item) => {
    setActive(item);
    // console.log('input', input.value)
    ActionFn('CHANGE_BREEDS', { inputChangeBreeds: item.value.value });
    input.onChange(item);
  }


  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <ul className="ln binding">
        {options.map((item, index) => (
          <li
            key={index}
            className={`${active?.label == item.label && "active"}`}
            onClick={() => { changeVal(item) }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
};

const RenderInputBinding = ({
  accountInfo,
  name,
  label,
  labelSecond,
  num,
  className,
  ActionFn }) => {


  const [listings, setListings] = useState([]);

  useEffect(() => {

    let isMounted = true;

    getListing('company', accountInfo.uid, 'userRef').then(res => {
      if (isMounted) {
        let nuwOptions = [];
        res.map(item => {
          nuwOptions.push({
            label: item.card_name,
            value: item.id,
            breeds_nurseries: item.breeds_nurseries
          });
        })
        setListings(nuwOptions);
      };
    });

    return () => { isMounted = false };
  }, []);





  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    options={listings}
    component={Template}
    ActionFn={ActionFn}
    num={num}
    className={className}
  />;
}


const mapStateToProps = (state) => {

  return {
    accountInfo: state.accountInfo,
  }
}


export default connect(mapStateToProps, { ActionFn })(RenderInputBinding);
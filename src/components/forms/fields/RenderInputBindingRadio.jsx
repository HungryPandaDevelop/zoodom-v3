
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
  useEffect(() => {

    if (input.value) {
      // console.log('va', input.value)
      ActionFn('CHANGE_BREEDS', { inputChangeBreeds: input.value });
    }
  }, [input]);
  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <div className="checkbox-container">
        {options.map((item, index) => (
          <div className='checkbox' key={index}>
            <label>

              <input
                {...input}
                name={name}
                value={item.value}
                type="radio"
                checked={input.value === item.value ? 'checked' : ''}
              />
              <span></span>
              <em>{item.label}</em>
            </label>
          </div>
        ))}
      </div>
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
          nuwOptions.push({ label: item.card_name, value: item.id });
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
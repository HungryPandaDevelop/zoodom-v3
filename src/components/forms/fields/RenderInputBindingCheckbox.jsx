import { useEffect, useState } from 'react'

import { getListing } from 'store/asyncActions/getListing';

import { connect } from 'react-redux';


import { Field } from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';



const TemplateCheckbox = ({ input, label }) => (

  <div className="checkbox">
    <label>
      {label}
      <input type="checkbox" {...input} />
      <span></span>
    </label>
  </div>
);

const RenderInputBinding = ({ accountInfo, name, label, labelSecond, options, num }) => {


  const [listings, setListings] = useState([]);

  useEffect(() => {

    let isMounted = true;

    getListing('company', accountInfo.uid, 'userRef').then(res => {
      if (isMounted) {
        let nuwOprions = [];
        res.map(item => {
          nuwOprions.push({ label: item.card_name, value: item.id });
        })
        setListings(nuwOprions);
      };
    });

    return () => { isMounted = false };
  }, []);

  return (
    <>
      <label><b>{num}. {label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>
      <div className='checkbox-container'>
        <Field
          name={name}
          component={ReduxCheckbox(Checkboxes)}
          data={listings}
          itemComponent={TemplateCheckbox}
          value={listings}
          num={num}
        />
      </div>
    </>
  );
}


const mapStateToProps = (state) => {

  return {
    accountInfo: state.accountInfo,
  }
}


export default connect(mapStateToProps)(RenderInputBinding);
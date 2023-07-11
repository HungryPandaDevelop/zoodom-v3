import { connect } from 'react-redux';

import { Field } from 'redux-form';
import { useEffect } from 'react';

import { required, minLength, mailCheck } from 'components/forms/validator';

const TempateInputText = (props) => {


  const {
    input,
    label,
    labelSecond,
    num,
    checkErrorSubmit,
    setErrCheck,
    className,
    numBool,
    meta: {
      error,
    }
  } = props;


  useEffect(() => {



    if (setErrCheck) {
      if (error) {
        setErrCheck(false);
      }
      else {
        setErrCheck(true);
      }
    }

  }, [error]);

  useEffect(() => {
    // setNum();
  }, []);


  return (
    <div className={className}>



      <input
        {...input}
        type="text"
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}

      />
      {label && <label htmlFor={input.name}><b>{!numBool ? (<>{num}. </>) : ''}{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  );
}



const RenderInputText = ({
  obj,
  inputValueConnect,
  num,
  checkErrorSubmit,
  setErrCheck,
}) => {


  const {
    name,
    validate,
    label,
    labelSecond,
    wrapClass,
    numBool,
    hideByClickId
  } = obj;

  let validateArr = [];

  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(minLength); }
    // else if (item === 'checkRus') { validateArr.push(checkRus); }
    else if (item === 'mailCheck') { validateArr.push(mailCheck); }

  });


  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect.length > 0 && hideByClickId.indexOf(inputValueConnect) === -1) {
    return false;
  }

  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    className={wrapClass}
    component={TempateInputText}
    num={num}
    numBool={numBool}
    validate={validateArr}
    checkErrorSubmit={checkErrorSubmit}
    setErrCheck={setErrCheck}

  />;
}


const mapStateToProps = (state) => {

  return {
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}
export default connect(mapStateToProps)(RenderInputText);
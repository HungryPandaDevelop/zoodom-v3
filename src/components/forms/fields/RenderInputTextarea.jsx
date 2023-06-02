import { Field } from 'redux-form';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import { required, minLength, mailCheck } from 'components/forms/validator';

const TempateInputTextarea = (props) => {

  const {
    input,
    label,
    labelSecond,
    checkErrorSubmit,
    maxLength,
    setErrCheck,
    num,
    className,
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

  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}


      <textarea
        {...input}
        type="textarea"
        id={input.name}
        className={`input-decorate ${checkErrorSubmit && error && 'input-error'} ${input.value.length > 0 ? 'input-empty' : ''} `}
        maxLength={maxLength}
      >
      </textarea>
      {label && <label htmlFor={input.name}><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {(checkErrorSubmit && (error && <span className='input-error-text'>{error}</span>))}
    </div>
  );
}

const RenderInputTextarea = ({
  obj,
  inputValueConnect,
  checkErrorSubmit,
  setErrCheck,
  num,
}) => {

  const {
    name,
    label,
    labelSecond,
    maxLength,
    validate,
    wrapClass,
    hideByClickId,
  } = obj;

  let validateArr = [];
  validate && validate.map((item) => {
    if (item === 'required') { validateArr.push(required); }
    else if (item === 'minLength') { validateArr.push(minLength); }
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
    component={TempateInputTextarea}
    className={wrapClass}
    num={num}
    maxLength={maxLength}
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
export default connect(mapStateToProps)(RenderInputTextarea);
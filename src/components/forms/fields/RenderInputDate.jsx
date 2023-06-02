import { Field } from 'redux-form';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import InputMask from 'react-input-mask';
import { useEffect, useRef } from "react";
import { connect } from 'react-redux';


const TempateInputText = (props) => {

  let $input = useRef(null);
  let dp = useRef(null);

  const {
    input,
    placeholder,
    label,
    labelSecond,
    view,
    className,
    errorOn, meta: { touched, error },
    num } = props;

  useEffect(() => {
    // Save instance for the further update

    // dp.current = new AirDatepicker($input.current);
  }, []);




  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}
      {/* <input
        {...input}
        type="text"
        placeholder={placeholder}
        id={input.name}
        ref={$input}
        className={`input-decorate  ${input.value.length > 0 ? 'input-empty' : ''}`}
      /> */}
      <InputMask
        {...input}
        type="date"
        // mask='99.99.9999'
        maskChar=' '

        id={input.name}
        className={`input-decorate  ${input.name.length > 0 ? 'input-empty' : ''} `}
      >
        {inputProps => <input ref={$input} {...inputProps} initalValue=" " />}
      </InputMask>
      {label && <label htmlFor={input.name}><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}

      {errorOn && touched && error && <span className='error-hint'>{error}</span>}

    </div>
  );
}


const RenderInputDate = ({
  name,
  placeholder,
  label,
  errorOn,
  num,
  view,
  className,
  inputValueConnect,
  hideByClickId
}) => {


  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect !== hideByClickId) { return false }



  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    className={className}
    component={TempateInputText}
    errorOn={errorOn}
    num={num}
    view={view}

  />;
}


const mapStateToProps = (state) => {

  return {
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}
export default connect(mapStateToProps)(RenderInputDate);
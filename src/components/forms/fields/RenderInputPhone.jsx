import { Field } from 'redux-form';
// import PhoneInput from 'react-phone-input-2' удалить
// import { createTextMask } from 'redux-form-input-masks' удалить;
import InputMask from 'react-input-mask';
// import { withMask } from 'use-mask-input' удалить;
// const phoneMask = createTextMask({
//   pattern: '+7 (999) 999-99-99',
// }); удалить

const TempateInputText = (props) => {
  const {
    input,
  } = props;

  return (
    <>
      {/* <input
        {...input}
        type="text"
        // ref={withMask('9999-9999')}
        id={input.name}
        className={`input-decorate  ${input.name.length > 0 ? 'input-empty' : ''} `}

      /> */}
      <InputMask
        {...input}
        mask='+7 (999) 999-99-99'
        maskChar={null}

        id={input.name}
        className={`input-decorate  ${input.value.length > 0 ? 'input-empty' : ''} `}
      />
    </>
  );
}


const RenderInputPhone = ({ name, placeholder, label, labelSecond, className, num }) => {
  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}


      <Field
        name={name}
        type="tel"
        placeholder={placeholder}

        component={TempateInputText}
      // {...phoneMask}

      />
      {label && (<label htmlFor={name}><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>)}
    </div>
  );
}

export default RenderInputPhone;
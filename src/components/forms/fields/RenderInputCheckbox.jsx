
import { Field } from 'redux-form';
import { connect } from 'react-redux';


const TemplateInputRadio = ({
  label,
  labelSecond,
  options,
  input,
  num,
  item,
  className,
  numBool
}) => {

  return (
    <div className={className}>
      {label && <label><b>{!numBool ? num + '.' : ' '} {label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <div className="checkbox-container">
        {options.map((item, index) => (
          <div
            className='checkbox'
            key={index}>
            <label>
              <input
                name={`${input.name}[${item.value}]`}
                value={item.value}
                type="checkbox"
                checked={input.value.indexOf(item.value) !== -1}

                onChange={(event) => {

                  const newValue = [...input.value];
                  console.log(newValue)
                  if (event.target.checked) {
                    newValue.push(item.value);
                  } else {
                    newValue.splice(newValue.indexOf(item.value), 1);
                  }

                  return input.onChange(newValue);
                }}
              />
              <span></span>
              <em>{item.label}</em>
            </label>
          </div>
        ))}
      </div>

    </div>
  );
}

const RenderInputCheckboxSimple = ({
  name,
  label,
  labelSecond,
  options,
  num,
  inputValueConnect,
  hideByClickId,
  className,
  numBool
}) => {

  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect !== hideByClickId) { return false }

  return (
    <Field
      name={name}
      label={label}
      labelSecond={labelSecond}
      options={options}
      component={TemplateInputRadio}
      num={num}
      numBool={numBool}
      className={className}
    />
  );



}

const mapStateToProps = (state) => {

  return {
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}
export default connect(mapStateToProps)(RenderInputCheckboxSimple);
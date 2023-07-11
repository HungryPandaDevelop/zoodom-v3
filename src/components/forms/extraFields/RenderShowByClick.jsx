
import { connect } from 'react-redux';
import { useEffect } from 'react';
import ActionFn from 'store/actions';
import { Field } from 'redux-form';

const TemplateInputRadio = ({
  ActionFn,
  name,
  label,
  labelSecond,
  options,
  input,
  num,
  className,

}) => {

  const changeStateNew = (e) => {
    // e.preventDefault();
    // console.log('click', e.target.dataset.index);
    let indexShow = e.target.dataset.index;
    ActionFn('INPUT_CONNECT', { inputValueConnect: indexShow });
  }
  useEffect(() => {

    if (input.value) {
      ActionFn('INPUT_CONNECT', { inputValueConnect: input.value });
    } else {
      ActionFn('INPUT_CONNECT', { inputValueConnect: '' });
    }
  }, [input])



  return (
    <div className={className}>
      {label && <label><b>{num}. {label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <div className="checkbox-container">
        {options.map(item => (
          <div className='checkbox' key={item.value}>
            <label>

              <input
                {...input}
                name={name}
                value={item.value}
                data-index={item.value}
                onClick={(e) => changeStateNew(e)}
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
  );
}



const RenderInputIn = ({
  ActionFn,
  name,
  label,
  labelSecond,
  options,
  num,
  className,

}) => {

  return <Field
    name={name}
    ActionFn={ActionFn}
    label={label}
    labelSecond={labelSecond}
    options={options}
    component={TemplateInputRadio}
    num={num}
    className={className}

  />;
}


export default connect(null, { ActionFn })(RenderInputIn);
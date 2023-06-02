import { useState, useEffect, useRef } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';


const TemplateSelect = (props) => {
  // console.log('hi', props)
  const {
    input,
    placeholder,
    label,
    labelSecond,
    options,
    num,
    inputValueConnect,
    hideByClickId,
    className,
    setOuterVal, // ?
    setCurrentAnimal // ?

  } = props;
  // const elRef = useRef();
  // const [custVal, setCustVal] = useState('');


  // создание селекта

  const selectRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(placeholder);
  const [firstLoad, setFirstLoad] = useState(0);

  useEffect(() => {

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (selectRef && selectRef.current) {
        const ref = selectRef.current
        if (!ref.contains(e.target)) {
          setOpen(false)
        }
      }
    }
  }, []);




  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      // setCustVal(input.value);

      const findEl = (options.filter((fl) => fl.label === input.value));
      // console.log('findEl', findEl)
      if (findEl.length > 0) {
        setSelect(findEl[0].label);
        input.onChange(findEl[0].label);

        setCurrentAnimal && setCurrentAnimal(findEl[0]); // ?
        setOuterVal && setOuterVal(findEl[0].value); /// ???
      };

    }
  }, [input]);
  // console.log(options, select)

  const renderOptions = options.map((li) => {
    if (select && li.value === select.value) {
      return null;
    }
    return (
      <li
        key={li.value}
        onClick={() => { onSelectedChange(li) }}>
        {li.label}
      </li>
    )
  });


  const onSelectedChange = (value) => {
    // elRef.current.focus();

    // setCustVal(value.label);
    setSelect(value.label);
    input.onChange(value.label);

    setCurrentAnimal && setCurrentAnimal(value)
    setOuterVal && setOuterVal(value.value); /// ???
  }

  // console.log(inputValueConnect, inputValueConnect)
  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect.length > 0 && hideByClickId.indexOf(inputValueConnect) === -1) {
    return false;
  }
  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}
      {label && (<label><b>{label}</b> <span>{labelSecond}</span></label>)}
      <div
        ref={selectRef}
        className={`custom-select ${open ? 'active' : ''}`}
        onClick={() => { setOpen(!open) }} >
        <span>{select}</span>
        <i></i>
        <ul className='ln'>
          {renderOptions}
        </ul>
      </div>

    </div>
  )
}

const RenderInputSelect = (props) => {




  return <Field
    name={props.name}
    props={props}
    component={TemplateSelect}
  />

}

const mapStateToProps = (state) => {

  return {
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}
export default connect(mapStateToProps)(RenderInputSelect);
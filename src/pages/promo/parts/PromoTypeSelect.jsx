import { useState, useEffect, useRef } from 'react';



const PromoTypeSelect = ({
  valueSelect,
  setValueSelect,
  // setСhoiseName,
  setSelectSearch,
  setBreedChoise,
  options,
}) => {
  const [open, setOpen] = useState(false);



  const elRef = useRef(null);
  const elRefId = useRef();



  useEffect(() => {

    const hideByBody = (e) => {

      if (elRef.current && !elRef.current.contains(e.target)) {
        setOpen(false)
      }
      if (e.key === 'Escape') { setOpen(false); }
    }
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };



  }, []);



  const onSelectedChange = (value) => {
    console.log('set', value)
    // setSelectSearch('Выберите тип объявления');
    setValueSelect(value);
    setBreedChoise(false);
  }


  const renderOptions = (options) => {

    return options.map((li) => {
      if (li.label === valueSelect.label) {
        return null;
      }
      return (
        <li
          key={li.value}
          onClick={() => { onSelectedChange(li) }}
        >
          {li.label}
        </li>
      )
    })
  };


  return (
    <div className="col-3" ref={elRefId} >
      <label><b>Тип</b></label>
      <div
        className={`custom-select ${open ? 'active' : ''}`}
        onClick={() => { setOpen(!open) }}
        ref={elRef}
      >
        <span>{valueSelect.label}</span>
        <i></i>
        <ul className='ln'>
          {renderOptions(options)}
        </ul>
      </div>
    </div>
  )
}

export default PromoTypeSelect;
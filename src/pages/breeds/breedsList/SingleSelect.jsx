import { useState, useEffect, useRef } from 'react';

import { inputLoadList } from 'pages/breeds/breedsList/allGenerateUrl';


const SingleSelect = ({ topic,
  options,
  className,
  idSelect,
  searchParams,
  setSearchParams,
  setParamsUrlGenerate
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState('Все');

  const elRef = useRef(null);
  const elRefId = useRef();

  const [firstLoad, setFirstLoad] = useState(0);

  useEffect(() => {

    let objToArr = [];

    for (let key in options) {
      objToArr.push({ label: options[key], value: key })
    };

    if (searchParams.get(idSelect).length > 0 && firstLoad === 0) {
      setFirstLoad(1);
      objToArr.map((item) => {
        if (item.value === searchParams.get(idSelect)) {
          setSelect(item.label);
        };
      });
    }


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
    //console.log('set')
    setSelect(value.label);

    if (value.label === 'Все') {
      setParamsUrlGenerate('');
      setSearchParams('');
    }
    else {
      inputLoadList(searchParams, setSearchParams, setParamsUrlGenerate, value.value, idSelect);
    }

  }


  const renderOptions = (options) => {

    let objToArr = [{ label: 'Все', value: 'type0' }];

    for (let key in options) {

      objToArr.push({ label: options[key], value: key })
    }

    return objToArr.map((li) => {
      if (select && li.label === select) {
        return null;
      }
      return (
        <li
          key={li.value}
          onClick={() => { onSelectedChange(li) }}
          data-value={li.value}
        >
          {li.label}
        </li>
      )
    })
  };

  return (
    <div className={className} ref={elRefId} data-id={idSelect}>
      <label><b>{topic}</b></label>
      <div
        className={`custom-select ${open ? 'active' : ''}`}
        onClick={() => { setOpen(!open) }}
        ref={elRef}
      >
        <span>{select}</span>
        <i></i>
        <ul className='ln'>
          {renderOptions(options)}
        </ul>
      </div>
    </div>
  )
}

export default SingleSelect;


import { useState, useEffect, useRef } from 'react';

import { Field } from 'redux-form';

import storeImage from 'hooks/storeImage';

const TemplateFile = (props) => {

  const elRef = useRef();

  const {
    input,
    label,
    labelSecond,
    maxSize,
    num,
    className
  } = props;

  const [nameFile, setNameFile] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);
  const [loadingFile, setLoadingFile] = useState(false);

  useEffect(() => {

    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      setNameFile(input.value);
    }

  });

  const onChange = async (e) => {
    elRef.current.focus();

    const files = e.target.files; // выделили фотки

    if (e.target.files[0].size > maxSize) {
      e.target.value = '';
      alert('Файл слишком большой')
      // toast.error('Файл слишком большой')
      return false;
    }

    let fileUrls = await Promise.all( // загрузили получили урлы
      [...files].map((file) => storeImage(file, setLoadingFile))
    ).catch(() => {
      console.log('err')
      return
    });



    setNameFile(fileUrls);
  }
  const deleteFile = (index) => {
    setNameFile('');
    elRef.current.focus();
  }

  return (
    <div className={className}>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}


      <div className='input-photo'>
        <div
          className="input-file-container"
        >
          {loadingFile === true && <div className="preloader"></div>}
          <input ref={elRef} type="text" {...input} value={nameFile} className="input-file" />
          <input type="file" onChange={onChange} className="input-file" accept=".jpg, .jpeg, .png" />
        </div>

        {!nameFile && <>
          <div className="input-user-ico"></div>
        </>}
        {nameFile && (
          <div className='input-photo-uploaded' style={{ backgroundImage: `url(${nameFile})` }}>
            <div className='input-photo-clear' onClick={() => { deleteFile() }}></div>
          </div>
        )}
      </div></div>
  )
}


const RenderInputFileNew = (props) => {

  return <Field
    name={props.name}
    props={props}
    component={TemplateFile}
  />

}


export default RenderInputFileNew

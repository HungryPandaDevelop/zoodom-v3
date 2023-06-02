import { getStorage, ref, deleteObject } from "firebase/storage";

import { connect } from 'react-redux';
import axios from "axios";


import { useState, useEffect, useRef } from 'react';

import { Field } from 'redux-form';

import storeImage from 'hooks/storeImage';


const TemplateFile = (props) => {
  const siteWp = 'http://zoo-base.sait.website/';
  const storage = getStorage();
  const elRef = useRef();

  const {
    input,
    label,
    labelSecond,
    maxSize,
    textEmpty,
    nameFolder,
    num,
    token
  } = props;

  const [nameFile, setNameFile] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);
  const [loadingFile, setLoadingFile] = useState(false);






  useEffect(() => {
    // console.log('token', token)
    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      setNameFile(input.value);

    }

  }, [input]);

  const onChange = async (e) => {
    // elRef.current.focus();

    const files = e.target.files; // выделили фотки

    if (e.target.files[0].size > maxSize) {
      e.target.value = '';
      alert('Файл слишком большой')
      // toast.error('Файл слишком большой')
      return false;
    };

    // -----------------------

    //---------------------------
    let fileUrls = await Promise.all( // загрузили получили урлы
      [...files].map((file) => storeImage(file, setLoadingFile, nameFolder))
    ).catch(() => {
      console.log('err')
      return
    });



    setNameFile(fileUrls);
    input.onChange(fileUrls);
  }
  const deleteFile = (nameFile) => {
    setNameFile('');
    // elRef.current.focus();
    input.onChange('');

    const desertRef = ref(storage, nameFile);

    deleteObject(desertRef).then(() => {
      console.log('file delete')
    }).catch((error) => {
      console.log('file delete err', error)
    });

  }



  return (
    <>
      {num && <i className="num-offset">{num}</i>}
      {label && <label><b>{label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}

      <div
        className="file-input-container"
      >
        {loadingFile === true && <div className="preloader"></div>}
        {!nameFile && <div className="file-decorate"><span>{textEmpty}</span><i></i></div>}
        {/* <input ref={elRef} type="text" {...input} value={nameFile} className="input-file-second" /> */}
        <input type="file" onChange={onChange} className="input-file" accept=".jpg, .jpeg, .png, .svg" />
        {nameFile && (
          <>
            <div className='file-uploaded'>
              <div className="file-uploaded-container">
                <img src={nameFile} alt={nameFile} />
              </div>
              <div className='file-uploaded-delete' onClick={() => { deleteFile(nameFile) }}>delete</div>
            </div>

          </>
        )}
      </div>

    </>
  )
}


const RenderInputFile = (props) => {

  return <Field
    name={props.name}
    props={props}
    typeAccept={props.typeAccept}
    component={TemplateFile}
  />

}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    token: state.accountInfo.token,
  }
}

export default connect(mapStateToProps)(RenderInputFile);
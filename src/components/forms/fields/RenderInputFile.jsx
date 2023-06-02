import { connect } from 'react-redux';
import axios from "axios";

import { useState, useEffect } from 'react';

import { Field } from 'redux-form';

const TemplateFile = (props) => {

  const {
    input,
    label,
    labelSecond,
    maxSize,
    textEmpty,
    num,
    className,
    token
  } = props;

  const siteWp = 'http://zoo-base.sait.website/';

  const headers = {
    Authorization: "Bearer " + token,
  };


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
    const fd = new FormData();

    fd.append("file", files[0], files[0].name);
    // console.log('fd', fd)
    setLoadingFile(true);

    axios.post(`${siteWp}/wp-json/wp/v2/media`, fd, { headers }).then(res => {

      setLoadingFile(false);

      setNameFile(res.data.source_url);
      input.onChange([res.data.source_url, res.data.id]);

    }).catch(err => {
      console.log('err', err);
    });



  }
  const deleteFile = (idFile) => {

    axios.delete(`${siteWp}wp-json/wp/v2/media/${idFile}?force=True`, {
      headers
    })
      .then((data) => {

        console.log('err', data)
      })
      .catch((err) => {
        console.log('err', err)
      });
    setNameFile('');
    input.onChange('');
  };



  return (
    <div className={className}>
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
                <img src={nameFile[0]} alt={nameFile[1]} />
              </div>
              <div className='file-uploaded-delete' onClick={() => { deleteFile(nameFile[1]) }}>delete</div>
            </div>

          </>
        )}
      </div>

    </div>
  )
}


const RenderInputFile = (props) => {

  const { inputValueConnect, hideByClickId } = props;

  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect.length > 0 && hideByClickId.indexOf(inputValueConnect) === -1) {
    return false;
  }

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
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}

export default connect(mapStateToProps)(RenderInputFile);
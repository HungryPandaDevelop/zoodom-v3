
import { connect } from 'react-redux';

import axios from "axios";

import { useState, useEffect } from 'react';

import { Field } from 'redux-form';


import { useDropzone } from 'react-dropzone'




const TemplateFile = (props) => {






  const {
    input,
    label,
    labelSecond,
    num,
    token,
    className
  } = props;

  const siteWp = 'https://zoo-base.sait.website/';

  const headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "multipart/form-data",
  };


  const [nameFile, setNameFile] = useState([]);


  const [loadingFile, setLoadingFile] = useState(false);

  useEffect(() => {
    // console.log('change', input)
    // if (input.value && firstLoad === 0) {
    // setFirstLoad(1);
    setNameFile(input.value);

    // }



  }, [input]);


  const onDrop = async (acceptedFiles) => {
    // let fileUrls;
    // console.log(acceptedFiles)

    const fd = new FormData();
    // console.log('acceptedFiles', acceptedFiles[0])
    const fileLength = acceptedFiles.length
    let fileUrls = [];

    setLoadingFile(true);
    if (fileLength < 10) {

      acceptedFiles.map((file, index) => {
        fd.append("file", file, file.name);

        axios.post(`${siteWp}/wp-json/wp/v2/media`, fd, { headers }).then(res => {
          fileUrls.push({ name: res.data.source_url, id: res.data.id })

          if (index === (fileLength - 1)) {
            setLoadingFile(false);
            console.log(fileUrls)
          }

        }).catch(err => {
          console.log('err', err);
        });
      });


      setNameFile(fileUrls);
      input.onChange(fileUrls);
    } else {
      alert('меньше')
    }





  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }
  });


  const deleteFile = (deleteItem) => {

    axios.delete(`${siteWp}wp-json/wp/v2/media/${deleteItem}?force=True`, {
      headers
    })
      .then((res) => {
        console.log('del', res)
      })
      .catch((err) => {
        console.log('err', err)
      });


    setNameFile(nameFile.filter(item => item.id !== deleteItem))

    input.onChange(nameFile.filter(item => item.id !== deleteItem))


  }



  return (
    <div className={className}>


      {label && <label><b>{num ? (<>{num}. </>) : ''} {label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
      {nameFile.length < 10 && (<div className={`dragdrop-container ${isDragActive ? 'dragged' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {loadingFile === true ? <div className="preloader"></div> : (<span>Перетащите несколько файлов сюда или нажмите, чтобы выбрать файлы</span>)}
      </div>)}

      <div className="file-uploaded-wrapper">
        {nameFile && nameFile.map((item, index) => (
          <div className='file-uploaded' key={index}>
            <div className="file-uploaded-container">
              <img src={item.name} alt={item.name} />
            </div>
            <div className='file-uploaded-delete' onClick={() => { deleteFile(item.id) }}>delete</div>
          </div>
        ))}
      </div>
    </div>

  )
}


const RenderInputZone = (props) => {

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

export default connect(mapStateToProps)(RenderInputZone);
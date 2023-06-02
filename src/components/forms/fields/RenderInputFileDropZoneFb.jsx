import { getStorage, ref, deleteObject } from "firebase/storage";


import { useState, useEffect } from 'react';

import { Field } from 'redux-form';

import storeImage from 'hooks/storeImage';

import { useDropzone } from 'react-dropzone'




const TemplateFile = (props) => {



  const storage = getStorage();


  const {
    input,
    label,
    labelSecond,
    nameFolder,
    num
  } = props;

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
    let fileUrls;
    // console.log(acceptedFiles)
    if (acceptedFiles.length < 10) {
      fileUrls = await Promise.all( // загрузили получили урлы
        acceptedFiles.map((file) => storeImage(file, setLoadingFile, nameFolder))
      ).catch(() => {
        console.log('err')
        return
      });



      setNameFile([...nameFile, ...fileUrls]);

      input.onChange([...nameFile, ...fileUrls]);
    } else {
      alert('меньше')
    }



  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] }
  });


  const deleteFile = (deleteItem) => {
    setNameFile(nameFile.filter(item => item !== deleteItem))

    input.onChange(nameFile.filter(item => item !== deleteItem))

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
      {nameFile.length < 2 && (<div className={`dragdrop-container ${isDragActive ? 'dragged' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {loadingFile === true ? <div className="preloader"></div> : (<span>Перетащите несколько файлов сюда или нажмите, чтобы выбрать файлы</span>)}
      </div>)}

      <div className="file-uploaded-wrapper">
        {nameFile && nameFile.map((item, index) => (
          <div className='file-uploaded' key={index}>
            <div className="file-uploaded-container">
              <img src={item} alt={item} />
            </div>
            <div className='file-uploaded-delete' onClick={() => { deleteFile(item) }}>delete</div>
          </div>
        ))}
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


export default RenderInputFile

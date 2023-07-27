import React from 'react';



import RenderTitle from './fields/RenderTitle';

import RenderInputText from './fields/RenderInputText'; // поле стандартное

import RenderInputHidden from './fields/RenderInputHidden'; // поле стандартное

import RenderInputDate from './fields/RenderInputDate'; // дата

import RenderInputPhone from './fields/RenderInputPhone'; // телефон

import RenderInputPassword from './fields/RenderInputPassword'; // пароля

import RenderInputTextarea from './fields/RenderInputTextarea'; // область текста

import RenderInputCheckbox from './fields/RenderInputCheckbox';  // чекбокс

import RenderInputRadio from './fields/RenderInputRadio';  // radio

import RenderInputSelect from './fields/RenderInputSelect'; // селект

import RenderInputList from './fields/RenderInputList'; // список особенный

import RenderInputFile from './fields/RenderInputFile'; // файл

import RenderInputFileDropZone from './fields/RenderInputFileDropZone'; // зона файлов

import RenderInputFileVideo from './fields/RenderInputFileVideo'; // видео

import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // фото



import RenderInputStar from './fields/RenderInputStar'; // звезды отзыв

import RenderInputSwitch from './fields/RenderInputSwitch'; // поле переключателя

import RenderInputMulty from './fields/RenderInputMulty'; // поле селект + текст

import RenderInputComplex from './fields/RenderInputComplex'; // комлекс

import RenderInputCoords from './fields/RenderInputCoords'; // координаты

import RenderInputBinding from './fields/RenderInputBinding'; // привязка

import RenderInputCity from './fields/RenderInputCity'; // выбор города


import RenderShowByClick from './extraFields/RenderShowByClick';

import RenderInputBreedsChoise from './extraFields/RenderInputBreedsChoise';

import RenderOwnBreedsSelect from './extraFields/RenderOwnBreedsSelect';


const RenderFields = ({ orderFields, objFields, checkErrorSubmit, setErrCheck, outsideValue, setErrMessage }) => {


  const choiseFieldType = (type, obj, index) => {
    switch (type) {
      case 'title':
        return (
          <>
            <RenderTitle
              label={obj.label}
              num={obj.num}
              outsideValue={outsideValue}
              className={obj.wrapClass}
            />
          </>
        )
      case 'text':
        return (
          <>
            <RenderInputText
              obj={obj}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              num={index}
              setErrMessage={setErrMessage}
            />
          </>
        );
      case 'textarea':
        return (
          <RenderInputTextarea
            obj={obj}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}
            num={index}


          />
        );
      case 'phone':
        return (
          <RenderInputPhone
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'select':
        return (
          <RenderInputSelect
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            placeholder={obj.placeholder}
            options={obj.options}
            // num={obj.num}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );
      case 'date':
        return (
          <RenderInputDate
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            // num={obj.num}
            num={index}
            view={obj.view}
            className={obj.wrapClass}
            hideByClickId={obj.hideByClickId}
          />
        );
      case 'password':
        return (
          <RenderInputPassword
            obj={obj}
            // num={obj.num}
            num={index}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}

          />
        );

      case 'checkbox':
        return (<RenderInputCheckbox
          name={obj.name}
          label={obj.label}
          labelSecond={obj.labelSecond}
          options={obj.options}
          // num={obj.num}
          num={index}
          hideByClickId={obj.hideByClickId}
          className={obj.wrapClass}
        />)
      case 'radio':
        return (
          <RenderInputRadio
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
            // num={obj.num}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );
      case 'list':
        return (
          <RenderInputList
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}

          />
        );


      case 'switch':
        return (
          <RenderInputSwitch
            name={obj.name}
            label={obj.label}
            options={obj.options}
            // num={obj.num}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );

      case 'file':
        return (
          <RenderInputFile
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            typeAccept={obj.typeAccept}
            maxSize={obj.maxSize}
            textEmpty={obj.textEmpty}
            nameFolder={obj.nameFolder}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
            hideByClickId={obj.hideByClickId}
          />
        );
      case 'dropzone':
        return (
          <RenderInputFileDropZone
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            typeAccept={obj.typeAccept}
            maxSize={obj.maxSize}
            textEmpty={obj.textEmpty}
            nameFolder={obj.nameFolder}
            // num={obj.num}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );
      case 'fileVideo':
        return (
          <RenderInputFileVideo
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            typeUpload={obj.typeUpload}
            maxSize={obj.maxSize}
            textEmpty={obj.textEmpty}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'photo':
        return (
          <RenderInputFilePhoto
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            typeUpload={obj.typeUpload}
            maxSize={obj.maxSize}
            typeFile={obj.typeFile}
            textEmpty={obj.textEmpty}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'multy':
        return (
          <RenderInputMulty
            mainname={obj.mainname}
            label={obj.label}
            labelSecond={obj.labelSecond}
            allFields={obj.allFields}
            checkErrorSubmit={checkErrorSubmit}
            setErrCheck={setErrCheck}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
            hideByClickId={obj.hideByClickId}
          />
        );
      case 'complex':
        return (
          <RenderInputComplex
            name={obj.name}
            label={obj.label}
            allFields={obj.allFields}
            btnAddText={obj.btnAddText}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'coords':
        return (
          <RenderInputCoords
            name={obj.name}
            placeholder={obj.placeholder}
            label={obj.label}
            labelSecond={obj.labelSecond}
            disabled={obj.disabled}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );
      case 'hidden':
        return (
          <>
            <RenderInputHidden
              name={obj.name}
              className={obj.wrapClass}
            />
          </>
        );
      case 'binding':
        return (
          <>
            <RenderInputBinding
              name={obj.name}
              // num={obj.num}
              num={index}
              label={obj.label}
              labelSecond={obj.labelSecond}
              className={obj.wrapClass}
            />
          </>
        );
      case 'ownBreeds':
        return (
          <>
            <RenderOwnBreedsSelect
              name={obj.name}
              // num={obj.num}
              num={index}
              label={obj.label}
              labelSecond={obj.labelSecond}
              filter={obj.filter}
              className={obj.wrapClass}
              hideByClickId={obj.hideByClickId}
            />
          </>
        );
      case 'city':
        return (
          <>
            <RenderInputCity
              name={obj.name}
              // num={obj.num}
              num={index}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              validate={obj.validate}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              className={obj.wrapClass}
            />
          </>
        );
      case 'star':
        return (
          <RenderInputStar
            name={obj.name}
            label={obj.label}
            // num={obj.num}
            num={index}
            className={obj.wrapClass}
          />
        );

      case 'showByClick':
        return (
          <RenderShowByClick
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            placeholder={obj.placeholder}
            options={obj.options}
            className={obj.wrapClass}
            // num={obj.num}
            num={index}


          />
        );
      case 'breedsChoise':
        return (
          <RenderInputBreedsChoise
            name={obj.name}
            label={obj.label}
            allFields={obj.allFields}
            btnAddText={obj.btnAddText}
            // num={obj.num}
            num={index}
            hideByClickId={obj.hideByClickId}
            className={obj.wrapClass}
          />
        );

      default:
    }
  }



  return (
    <>
      {orderFields.map((item, index) => (
        <React.Fragment
          key={index} >
          {
            (choiseFieldType(objFields[item].type, objFields[item], (index + 1)))
          }
        </React.Fragment>
      ))}
    </>
  )
}

export default RenderFields;

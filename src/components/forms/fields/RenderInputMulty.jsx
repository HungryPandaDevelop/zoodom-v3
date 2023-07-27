import React from 'react';

import { connect } from 'react-redux';

import RenderTitle from './RenderTitle';

import RenderInputText from './RenderInputText'; // поле стандартное

import RenderInputTextarea from './RenderInputTextarea'; // поле текста

import RenderInputSelect from './RenderInputSelect';

// name={`${hobbyParam}.${item.name}`}
const RenderInputMulty = (props) => {

  const {
    mainname,
    allFields,
    label,
    labelSecond,
    num,
    checkErrorSubmit,
    setErrCheck,
    className,
    hideByClickId,
    inputValueConnect,
    numBool
  } = props;

  const renderFields = allFields.map((field, index) => {
    switch (field.type) {
      case 'title':
        return (
          <React.Fragment key={index} >
            <RenderTitle
              // name={`${mainname}.${field.name}`}
              // id={`${mainname}.${field.name}`}
              label={field.label}
              className={field.wrapClass}
              numBool={true}
            />
            {/* {field.label && <label htmlFor={`${mainname}.${field.name}`}><b>{field.label}</b></label>} */}
          </React.Fragment>
        )
      case 'text':
        return (
          <React.Fragment key={index} >
            <RenderInputText
              // name={`${mainname}.${field.name}`}
              // id={`${mainname}.${field.name}`}
              obj={{ ...field, name: mainname + '.' + field.name }}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              numBool={true}
            />
            {/* {field.label && <label htmlFor={`${mainname}.${field.name}`}><b>{field.label}</b></label>} */}
          </React.Fragment>
        )
      case 'textarea':
        return (
          <React.Fragment key={index} >

            <RenderInputTextarea
              // name={`${mainname}.${field.name}`}
              // id={`${mainname}.${field.name}`}
              // label={field.label}
              // className={field.wrapClass}
              obj={{ ...field, name: mainname + '.' + field.name }}
            />
            {/* {field.label && <label htmlFor={`${mainname}.${field.name}`}><b>{field.label}</b></label>} */}
          </React.Fragment>
        )
      case 'select':
        return (
          <React.Fragment key={index}>
            {/* {field.label && <label><b>{field.label}</b></label>} */}
            <RenderInputSelect
              name={`${mainname}.${field.name}`}
              label={field.label}
              options={field.options}
              className={field.wrapClass}
            />
          </React.Fragment>
        )
      default:
    }
  });

  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect.length > 0 && hideByClickId.indexOf(inputValueConnect) === -1) {
    return false;
  }

  return (
    <div className={className}>
      <div className={`main-grid multy-input`}>
        <div className="col-12">
          {label && <label ><b>{!numBool ? num + '.' : ''} {label}</b>{labelSecond && <div className='hint-input-file'><i><span>{labelSecond}</span></i></div>}</label>}
        </div>
        {renderFields}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}
export default connect(mapStateToProps)(RenderInputMulty);